let products = [
    {
        name: "Black coat",
        size: "L",
        color: "Black",
        price: 1200,
        image: "product1.jpg",
        description: "Good looking Suit",
    },
    {
        name: "Blue Coat",
        size: "LR",
        color: "Navy Blue",
        price: 2300,
        image: "product2.jpg",
        description: "Cool looking Suit",
    },
    {
        name: "White Shirt",
        size: "XXL",
        color: "White",
        price: 1000,
        image: "product3.jpg",
        description: "Dynamic Shirt",
    },
    {
        name: "One Causal Peices",
        size: "S",
        color: "Light Blue",
        price: 3200,
        image: "product4.jpg",
        description: "Awesome One Causal pecies",
    },
    {
        name: "One Peices Stylish Suit ",
        size: "M",
        color: "Sky Blue",
        price: 2100,
        image: "product5.jpg",
        description: "Good looking Woman stylish suit",
    },
    {
        name: "One Peices Royal Suit ",
        size: "XL",
        color: "Cream",
        price: 4350,
        image: "product6.jpg",
        description: "Parties Suit For Man",
    },
    {
        name: "3 Peice Suit ",
        size: "L",
        color: "Cream",
        price: 5200,
        image: "product7.jpg",
        description: "Causal Suites for parties for Man",
    }, {
        name: "Shervani Suit ",
        size: "M",
        color: "Sky Blue",
        price: 2100,
        image: "product8.jpg",
        description: "Shervani for Stylish Look for Man",
    },
    {
        name: "Full Piece Gown ",
        size: "XXL",
        color: "Black-Maroon",
        price: 4100,
        image: "product9.jpg",
        description: "Good looking Woman stylish suit",
    }, {
        name: "Short Suit ",
        size: "M",
        color: "Royal Maroon",
        price: 1200,
        image: "product10.jpg",
        description: "Sizziling Short Suit for Girls",
    },
    {
        name: "Short Suit ",
        size: "L",
        color: "Doted Black",
        price: 2100,
        image: "product11.jpg",
        description: "Party Wearing Girls Dress",
    },
    {
        name: "Patloons suit ",
        size: "S",
        color: "White",
        price: 2500,
        image: "product12.jpg",
        description: "Good looking Woman stylish Patloons suit",
    },

];

cart = [];

function displayProducts(productsData, who = "productwrapper") {
    let productsString = "";

    productsData.forEach(function (product, index) {

        let { name, image, size, price, color, description } = product;
        if (who == "productwrapper") {


            productsString += `<div class="product">
        <div class="prodimg">
            <img src="Products/${image}" width="100%">
        </div>
        <h3>Name: ${name}</h3>
        <p>Price: ${price}</p>
        <p>Size: ${size}</p>
        <p>Color: ${color}</p>
        <p>Description: ${description}</p>
        <p>
            <button onclick="addTocart(${index})">Add To Cart</button>
        </p>
      </div> `;
        }
        else if(who=="cart"){
            productsString += `<div class="product">
        <div class="prodimg">
            <img src="Products/${image}" width="100%">
        </div>
        <h3>Name: ${name}</h3>
        <p>Price: ${price}</p>
        <p>Size: ${size}</p>
        <p>Color: ${color}</p>
        <p>Description: ${description}</p>
        <p>
            <button onclick="remocart(${index})">Remove From Cart</button>
        </p>
      </div> `;

        }
    });

    document.getElementById(who).innerHTML = productsString;
};
displayProducts(products);




function searchProduct(searchValue) {

    let searchedProducts = products.filter(function (product, index) {

        let searchString = product.name + " " + product.color + " " + product.description;

        return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1

    });
    displayProducts(searchedProducts);

}

function addTocart(index) {

    cart.push(products[index]);
    displayProducts(cart, "cart")

}

 function remocart(index){

     cart.splice(index,1);
     displayProducts(cart,"cart");

 }