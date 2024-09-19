class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor() {
        this.backet = [];
    }

    addProduct(product, quantity) {
        for (let i = 0; i < quantity; i++) {
            this.backet.push(product);
        }
    }

    removeProduct(product) {
        const indexP = this.backet.indexOf(product);
        if (indexP !== 1) {
            this.backet.splice(indexP, 1);
        } else {
            console.log("Продукт не найден :(")
        }
    }

    getTotalPrice() {
        let totalPrice = 0;
        for (let i = 0; i < this.backet.length; i++) {
            totalPrice += this.backet[i].price;
        }

        return totalPrice;
    }

    checkout() {
        console.log("Чек:")

        for (let i = 0; i < this.backet.length; i++)
            console.log(`${i + 1}. ${this.backet[i].name}`)
        
        console.log(`Итого: ${this.getTotalPrice()} рублёв`)
        this.backet = [];
    }
}

let shoppingCart = new ShoppingCart();
shoppingCart.addProduct(new Product('картопля', 100), 2);
shoppingCart.addProduct(new Product('помидорки', 100), 1);
shoppingCart.addProduct(new Product('плейстейшен', 10), 3);

shoppingCart.checkout();
