// Code goes here

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
    let re = new RegExp(pattern);
    Product.products.forEach(function(product){
        for (let key in product) {
            if (product[key].search(re) >= 0) {
                Product.filtered.push(product);
            }
        }
    })
};

//next stage product prototype
let Cloth = function (name, price, producer, size, print) {
    Product.apply(this, arguments);
    this.size = size;
    this.print = print;
};
let Linens = function (name, price, producer, color, size, material) {
    Product.apply(this, arguments);
    this.color = color;
    this.size = size;
    this.material = material;
};
let Dishes = function (name, price, producer, color, material) {
    Product.apply(this, arguments);
    this.color = color;
    this.material = material;
};
Dishes.create = (name, price, producer, color, material) => {
    var product3 = new Dishes(name, price, producer);
    Product.products.push(product3);
    return product3;
};
Linens.create = (name, price, producer, color, size, material) => {
    var product2 = new Linens(name, price, producer);
    Product.products.push(product2);
    return product2;
};
Cloth.create = (name, price, producer, size, print) => {
    var product = new Cloth(name, price, producer);
    Product.products.push(product);
    return product;
};
// fabric method which shows products array in html
Product.showProducts = function() {
    var pattern = /:price|:name|:description/gi;

    return Product.products.map((product) => {
        var replaces = {
            ":price": product.price,
            ":name": product.name
        };
        return Product.config.templates.productCard.replace(pattern, (matched) => {
            return replaces[matched]
        })
    })
};
//config with html template
Product.config = {
    templates: {
        productCard: `
<div class="prdctCard">
    <a class="a" href="productcard.html"><img src="" alt="#"></a>
    <a class="a" href="productcard.html" class="prdctName">:name</a>
    <span class="prdctPrice">:price</span>
    <button>Buy me</button>
</div>`
    }
};

Cloth.create("Shirt", "$5", "Versace", "L", "SixEyes");
Cloth.create("Pants", "$10", "D&G", "S", "Logo");
Cloth.create("Shoes", "$15", "Fallen", "9", "Fallen");
Linens.create("Pillowcase", "$6", "Ottavapillows", "white", "50sm*70sm", "cotton");
Linens.create("Bedsheet", "$12", "Torontolinens", "beige", "Standart", "cotton");
Dishes.create("Cup", "$3", "Chineseporcelain", "red", "ceramics");
Dishes.create("Plate", "$4", "Chineseporcelain", "seaShell", "porcelain");


Product.prototype.setName = function(){
    console.log(this.name + " setName");
};
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

let btnContainer = document.querySelector(".btnContainer")
function Paginator(data) {
    this.data = data;
}

Paginator.config = {
    perPage: 6,
    totalPages: null,
    currentPage: 1
};

Paginator.init = function() {
    let prevBtn = document.createElement("button");
    prevBtn.textContent = "<<";
    prevBtn.onclick = paginator.prev;
    let nextBtn = document.createElement("button");
    nextBtn.textContent = ">>";
    nextBtn.onclick = paginator.next;

    /*    let buttons = document.createElement("span")
     buttons.appendChild(prevBtn);
     buttons.appendChild(nextBtn);*/
    Paginator.refresh();
    btnContainer.appendChild(prevBtn);
    btnContainer.appendChild(nextBtn)
};

Paginator.refresh = () => {
    let paginatedItems = paginator.paginate();
    elem.innerHTML = "";
    paginatedItems.forEach((item) => {
        elem.insertAdjacentHTML("afterBegin", item)
    });
    console.log("currentPage", Paginator.config.currentPage);
    //Paginator.init()
};

Paginator.prototype.paginate = function() {
    let config = Paginator.config;
    config.totalPages = Math.floor(this.data.length / config.perPage);
    // console.log(this.data.length / config.perPage )
    return this.data.filter((item, index) => {
        //console.log("index=", index)
        // вывод элементов между currentPage и currentPage * perPage не включая
        if (index >= (config.currentPage-1)*config.perPage && index < (config.currentPage)*(config.perPage)) {
            return item
        }
    })
};

Paginator.prototype.next = function() {
    console.log("<currentPage", Paginator.config.currentPage);
    if(Paginator.config.currentPage < (Paginator.config.currentPage)*(Paginator.config.perPage)){
    Paginator.config.currentPage++;
    }
    Paginator.refresh();
    console.log(">currentPage", Paginator.config.currentPage)
};
Paginator.prototype.prev = function() {
    console.log("<currentPage", Paginator.config.currentPage);
    if(Paginator.config.currentPage > 1){
    Paginator.config.currentPage--;
    }
    Paginator.refresh();

    console.log(">currentPage", Paginator.config.currentPage)
};






var elem = document.getElementById('products');
let products = Product.showProducts();
elem.insertAdjacentHTML("afterBegin", products.join(" "));
var paginator = new Paginator(products);
Paginator.init();

$(document).ready(() => {
    $('.a').on("click", function(e) {
        e.preventDefault();
        $.ajax({
            url: $(this).attr('href'),
            success: (page) => {
                $('#products-container').html(page)
            }
        })
    })
});

