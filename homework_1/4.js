class Customer{
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Product{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Order{
    constructor(products, customer) {
        if (products.length === 0) {
            this.products = []
        } else {
            this.products = products
        }
        this.customer = customer
    }

    addProduct(product, quantity) {
        for (let i = 0; i < quantity; i++) {
            this.products.push(product);
        }
    }

    calculateTotal() {
        let productSum = 0;
        for (let i = 0; i < this.products.length; i++) {
            productSum += this.products[i].price;
        }

        return productSum;
    }

    printOrder() {
        console.log(`Покупатель - ${this.customer.name}`);
        console.log("Его товары:");
        for (let i = 0; i < this.products.length; i++) {
            console.log(`${i + 1}. ${this.products[i].name}`);
        }
        console.log(`Итого: ${this.calculateTotal()} рублёв`)
    }
}

const product1 = new Product("картопля", 100);
const product2 = new Product("помидорки", 200);
const product3 = new Product("плейстейшен", 300);

const customer1 = new Customer("ivan", "ivan@mail");
const customer2 = new Customer("vasya", "vasya@mail");

const order1 = new Order([product1, product2, product3], customer1);
const order2 = new Order([product3, product2, product1], customer2);

order1.printOrder();
order2.printOrder();
