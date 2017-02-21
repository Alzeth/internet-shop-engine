//global prototype Product
Product = function (name, price, producer){
    this.name = name;
    this.price = price;
    this.producer = producer;
    return this;
  }
Product.prototype.setName = function(){
  console.log(this.name + " setName");
}
Product.prototype.getName = function(){
  return this.name;
}
Product.prototype.setPrice = function(){
  console.log(this.name + " setPrice");
}
Product.prototype.getPrice = function(){
  return this.price;
}
Product.prototype.setProducer = function(){
  console.log(this.name + " setProducer");
}
Product.prototype.getProducer = function(){
  return this.producer;
}


//Other constuctor functions for other products
Cloth = function (name, price, producer, size, print) {
  Product.apply(this, arguments);
  this.size = size;
  this.print = print;
  return this;
}
Cloth.prototype = Object.create(Product.prototype);
Cloth.prototype.constructor = Cloth;

Cloth.prototype.setSize = function(){
  console.log(this.name + " setSize");
}
Cloth.prototype.setName = function(){
  console.log(this.name + " setName");
}
Cloth.prototype.getName = function(){
  return this.name;
}
Cloth.prototype.setColor = function(){
  console.log(this.name + " setColor");
}
Cloth.prototype.setPrint = function(){
  console.log(this.name + " setPrint");
}

ShirtLarge = new Cloth("Shirt", "$5", "Versace", "L", "SixEyes");
PantsSmall = new Cloth("Pants", "$10", "D&G", "S", "Logo");


Linens = function (name, price, producer, color, size, material) {
  Product.apply(this, arguments);
  this.color = color;
  this.size = size;
  this.material = material;
  return this;
}
Linens.prototype = Object.create(Product.prototype);
Linens.constructor = Linens;

Linens.prototype.setSize = function(){
  console.log(this.name + " setSize");
}
Linens.prototype.setName = function(){
  console.log(this.name + " setName");
}
Linens.prototype.getName = function(){
  return this.name;
}
Linens.prototype.setColor = function(){
  console.log(this.name + " setColor");
}

var PillowCase = new Linens("Pillowcase", "$6", "Ottavapillows", "white", "50sm*70sm", "cotton");
var BedSheet = new Linens("Bedsheet", "$12", "Torontolinens", "beige", "Standart", "cotton");


Dishes = function (name, price, producer, color, material) {
  Product.apply(this, arguments);
  this.color = color;
  this.material = material;
  return this;
}
Dishes.prototype = Object.create(Product.prototype);
Dishes.constructor = Dishes;

Dishes.prototype.setSize = function(){
  console.log(this.name + " setSize");
}
Dishes.prototype.setName = function(){
  console.log(this.name + " setName");
}
Dishes.prototype.getName = function(){
  return this.name;
}

var Cup = new Dishes("Cup", "$3", "Chineseporcelain", "red", "ceramics");
var Plate = new Dishes("Plate", "$4", "Chineseporcelain", "seaShell", "porcelain");
