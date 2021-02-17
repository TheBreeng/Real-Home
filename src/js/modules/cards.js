import {
    getResource
} from '../services/services';

function cards(parentSelector, cardsStyle) {

    class Card {
        constructor(src, alt, address, city, price, area, bedrooms, bathrooms, parentSelector, cardStyle) {
            this.src = src;
            this.alt = alt;
            this.address = address;
            this.city = city;
            this.price = price;
            this.area = area;
            this.bedrooms = bedrooms;
            this.bathrooms = bathrooms;
            this.parent = document.querySelector(parentSelector);
            this.cardStyle = cardStyle;
        }

        rooms(num, room) {
            if (num > 1) {
                return `${num} ${room}s`;
            } else {
                return `${num} ${room}`;
            }
        }

        render() {
            const element = document.createElement('div'),
                bedroom = this.rooms(this.bedrooms, 'Bedroom'),
                bathroom = this.rooms(this.bathrooms, 'Bathroom');
            element.classList.add(this.cardStyle);
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3>${this.address}</h3>
                <p>${this.city}</p>
                <p>${this.price}</p>
                <ul>
                    <li>${this.area}</li>
                    <li>•</li>
                    <li>${bedroom}</li>
                    <li>•</li>
                    <li>${bathroom}</li>
                </ul>
            `;
            this.parent.append(element);
        }
    }

    getResource('db.json/cards')
        .then(data => {
            data.forEach(({
                src,
                alt,
                address,
                city,
                price,
                area,
                bedrooms,
                bathrooms
            }) => {
                new Card(src, alt, address, city, price, area, bedrooms, bathrooms, parentSelector, cardsStyle)
                .render();
            });
        });
}

export default cards;