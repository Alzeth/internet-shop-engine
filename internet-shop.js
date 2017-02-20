//global prototype Product
var Product{
  constructor: function Product(name, price, producer){
    this.name = name;
    this.price = price;
    this.producer = producer;
    return this;
  }
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
var Cloth = Object.create(Product);
Cloth.constructor = function (name, price, producer, size, print) {
  Product.constructor.apply(this, arguments);
  this.size = size;
  this.print = print;
  return this;
}

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

var ShirtLarge = new Cloth("Shirt", "$5", "Versace", "L", "SixEyes");
var PantsSmall = new Cloth("Pants", "$10", "D&G", "S", "Logo");


var Linens = Object.create(Product);
Linens.constructor = function (name, price, producer, color, size, material) {
  Product.constructor.apply(this, arguments);
  this.color = color;
  this.size = size;
  this.material = material;
  return this;
}

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
  console.log(this.name + " setMaterial");
}

var PillowCase = new Linens("Pillowcase", "$6", "Ottavapillows", "white", "50sm*70sm", "cotton");
var BedSheet = new Linens("Bedsheet", "$12", "Torontolinens", "beige", "Standart", "cotton");


var Dishes = Object.create(Product);
Dishes.constructor = function (name, price, producer, color, material) {
  Product.constructor.apply(this, arguments);
  this.color = color;
  this.material = material;
  return this;
}

Cloth.prototype.setSize = function(){
  console.log(this.name + " setSize");
}
Cloth.prototype.setName = function(){
  console.log(this.name + " setName");
}
Cloth.prototype.getName = function(){
  return this.name;
}
Cloth.prototype.setPrint = function(){
  console.log(this.name + " setMaterial");
}

var Cup = new Dishes("Cup", "$3", "Chineseporcelain", "red", "ceramics");
var Plate = new Dishes("Plate", "$4", "Chineseporcelain", "seaShell", "porcelain");
