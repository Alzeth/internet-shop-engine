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
