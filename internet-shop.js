//global prototype Product
Product = function (name, price, producer){
    this.name = name;
    this.price = price;
    this.producer = producer;
};
Product.products = [];
Product.filtered = [];
Product.search = function(pattern) {
    var re = new RegExp(pattern);
    Product.products.forEach(function(product){
        for (var key in product) {
            if (product[key].search(re) >= 0) {
                Product.filtered.push(product);
            }
        }
    })
};

Product.showProducts = function () {
    var cards = Product.products.map(function (product) {
        var result = Product.config.templates.productCard;
        result.replace("{0}", product.name);
        result.replace("{1}", product.price);
        return result;
    });
    return cards;
}
Product.config = {
    templates: {
        productCard: '<div><span class="productName">{0}</span><span>{1}</span></div>'
    }
}





Product.prototype.setName = function(){
    console.log(this.name + " setName");
}
/*Product.prototype.getName = function(){
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
 }*/


//Other constuctor functions for other products
Cloth = function (name, price, producer, size, print) {
    Product.apply(this, arguments);
    this.size = size;
    this.print = print;
};
Cloth.prototype = Object.create(Product.prototype);
Cloth.prototype.constructor = Cloth;

Cloth.prototype.setSize = function(){
    console.log(this.name + " setSize");
};
Cloth.prototype.setName = function(){
    console.log(this.name + " setName");
};
Cloth.prototype.getName = function(){
    return this.name;
};
Cloth.prototype.setColor = function(){
    console.log(this.name + " setColor");
};
Cloth.prototype.setPrint = function(){
    console.log(this.name + " setPrint");
};


//


Linens = function (name, price, producer, color, size, material) {
    Product.apply(this, arguments);
    this.color = color;
    this.size = size;
    this.material = material;
};
Linens.prototype = Object.create(Product.prototype);
Linens.constructor = Linens;

Linens.prototype.setSize = function(){
    console.log(this.name + " setSize");
};
Linens.prototype.setName = function(){
    console.log(this.name + " setName");
};
Linens.prototype.getName = function(){
    return this.name;
};
Linens.prototype.setColor = function(){
    console.log(this.name + " setColor");
};




Dishes = function (name, price, producer, color, material) {
    Product.apply(this, arguments);
    this.color = color;
    this.material = material;
};
Dishes.prototype = Object.create(Product.prototype);
Dishes.constructor = Dishes;

Dishes.prototype.setSize = function(){
    console.log(this.name + " setSize");
};
Dishes.prototype.setName = function(){
    console.log(this.name + " setName");
};
Dishes.prototype.getName = function(){
    return this.name;
};



//Product.create = function(){
var ShirtLarge = new Cloth("Shirt", "$5", "Versace", "L", "SixEyes");
Product.products.push(ShirtLarge);
var PantsSmall = new Cloth("Pants", "$10", "D&G", "S", "Logo");
Product.products.push(PantsSmall);
var PillowCase = new Linens("Pillowcase", "$6", "Ottavapillows", "white", "50sm*70sm", "cotton");
Product.products.push(PillowCase);
var BedSheet = new Linens("Bedsheet", "$12", "Torontolinens", "beige", "Standart", "cotton");
Product.products.push(BedSheet);
var Cup = new Dishes("Cup", "$3", "Chineseporcelain", "red", "ceramics");
Product.products.push(Cup);
var Plate = new Dishes("Plate", "$4", "Chineseporcelain", "seaShell", "porcelain");
Product.products.push(Plate);

//};



Product.products.map();
Product.showProducts();


// class example
/*
 function Fruit(name, color) {
 this.name = name;
 this.color = color;
 }

 Fruit.search = function(pattern) {
 var re = new RegExp(pattern);
 Fruit.fruits.forEach(function(fruit) {
 for (var key in fruit) {
 if (fruit[key].search(re) >= 0) {
 Fruit.filtered.push(fruit);
 }
 }
 })
 }

 Fruit.fruits = [];
 Fruit.filtered = [];

 Fruit.create = function(name, color) {
 var fruit = new Fruit(name, color);
 Fruit.fruits.push(fruit);
 return fruit;
 }

 Fruit.create("apple", "gold");
 Fruit.create("apple", "green");
 Fruit.create("banana", "gold");
 Fruit.search("app")

 console.log(Fruit.filtered)
 */