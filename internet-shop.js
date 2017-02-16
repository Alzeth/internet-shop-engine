//global prototype Product

function Product(name, price, producer){
  this.name = name;
  this.price = price;
  this.producer = producer;
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

function Cloth(name, color, size, print){
  this.name = name;
  this.color = color;
  this.size = size;
  this.print = print;
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

var ShirtLarge = new Cloth("Shirt", "black", "L", "SixEyes");
var PantsSmall = new Cloth("Pants", "black", "S", "Logo");


function Linens(name, color, size, material){
  this.name = name;
  this.color = color;
  this.size = size;
  this.material = material;
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

var PillowCase = new Linens("Pillowcase", "white", "50sm*70sm", "cotton");
var BedSheet = new Linens("Bedsheet", "beige", "Standart", "cotton");


function Dishes(name, color, material){
  this.name = name;
  this.color = color;
  this.material = material;
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

var Cup = new Dishes("Cup", "red", "ceramics");
var Plate = new Dishes("Plate", "seaShell", "porcelain");
