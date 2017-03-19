class Product {
  constructor(name, price, producer) {
    this.name = name;
    this.price = price;
    this.producer = producer;
  }
  getName() {
    return this.name;
  }
}

var Shirt = new Product("Shirt", "$10", "China");
console.log(Shirt.getName())

class Cloth extends Product {
  constructor(name, price, producer, size, print) {
    super(name, price, producer);
    this.size = size;
    this.print = print;
  }
  getName(){
    return super.getName() + ":cloth";
  }
}
var cloth = new Cloth("Pants", "$10", "D&G", "S", "Logo");
console.log(cloth.getName());
