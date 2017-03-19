//global prototype Product
Product = function (name, price, producer){
    this.name = name;
    this.price = price;
    this.producer = producer;
};
Product.products = [];
Product.filtered = [];

//fabric method Search
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

//next stage product prototype
var Cloth = function (name, price, producer, size, print) {
    Product.apply(this, arguments);
    this.size = size;
    this.print = print;
};
Cloth.create = (name, price, producer, size, print) => {
    var product = new Cloth(name, price, producer);
    Product.products.push(product);
    return product;
}
// fabric method which shows products array in html
Product.showProducts = function() {
    var pattern = /:price|:name|:description/gi;

    return Product.products.map((product) => {
        var replaces = {
            ":price": product.price,
            ":name": product.name
        }
        return Product.config.templates.productCard.replace(pattern, (matched) => {
            return replaces[matched]
        })
    })
}
 //config with html template
Product.config = {
    templates: {
        productCard: `
<div class="prdctCard">
    <a href="#"></a>
    <a href="#" class="prdctName">:name</a>
    <span class="prdctPrice">:price</span>
    <button>Buy me</button>
</div>`
    }
}

Cloth.create("Shirt", "$5", "Versace", "L", "SixEyes");
Cloth.create("Pants", "$10", "D&G", "S", "Logo");
Cloth.create("Shoes", "$15", "Fallen", "9", "Fallen");



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







   /* var PillowCase = new Linens("Pillowcase", "$6", "Ottavapillows", "white", "50sm*70sm", "cotton");
    Product.products.push(PillowCase);
    var BedSheet = new Linens("Bedsheet", "$12", "Torontolinens", "beige", "Standart", "cotton");
    Product.products.push(BedSheet);
    var Cup = new Dishes("Cup", "$3", "Chineseporcelain", "red", "ceramics");
    Product.products.push(Cup);
    var Plate = new Dishes("Plate", "$4", "Chineseporcelain", "seaShell", "porcelain");
    Product.products.push(Plate);*/
var elem = document.getElementById('products');
let products = Product.showProducts();
elem.insertAdjacentHTML("afterBegin", products.join(" "));

