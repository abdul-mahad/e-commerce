let succulent = [
    {
        CommonName: "Echeveria",
        ScientificName: "Echeveria spp",
        itemImage: "su1.jpg",
        itemPrice: "10",
        Origin: "Mexico",
        WateringCycle: "Allow soil to dry between waterings",
        LightRequirements: "Full to partial sun",
        Details: "Echeverias are rosette-shaped succulents with various colors and textures"
    },
    {   
        CommonName: "Zebra Plant",
        ScientificName: "Haworthia spp",
        itemImage: "su2.jfif",
        itemPrice: "8",
        Origin: "South Africa",
        WateringCycle: "Allow soil to dry before watering",
        LightRequirements: "Indirect or filtered sunlight",
        Details: "Haworthias are small succulents with distinctive white stripes or patterns"
    },
    {   
        CommonName: "Stonecrop",
        ScientificName: "Sedum spp",
        itemImage: "su3.jpg",
        itemPrice: "2",
        Origin: "Various regions worldwide",
        WateringCycle: "Allow soil to dry between waterings",
        LightRequirements: "Full sun to light shade",
        Details: "Sedums come in various forms and are known for their diverse foliage and flowering habits"
    },
    {   
        CommonName: "Aloe Vera",
        ScientificName: "Aloe barbadensis",
        itemImage: "su4.jpg",
        itemPrice: "6",
        Origin: "Arabian Peninsula",
        WateringCycle: "Water infrequently, allowing the soil to dry out",
        LightRequirements: "Bright, indirect sunlight",
        Details: "Aloe Vera is prized for its soothing gel and distinctive rosette shape"
    },
    {   
        CommonName: "Century Plant",
        ScientificName: "Agave spp",
        itemImage: "su5.jpe",
        itemPrice: "9",
        Origin: "Americas",
        WateringCycle: "Water sparingly, allowing the soil to dry completely",
        LightRequirements: "Full sun",
        Details: "Agaves are often large and striking, with spiky leaves and long lifespans"
    },
    {   
        CommonName: "Jade Plant",
        ScientificName: "Crassula ovata",
        itemImage: "su6.jpg",
        itemPrice: "7",
        Origin: "South Africa",
        WateringCycle: "Allow soil to dry between waterings",
        LightRequirements: "Bright light, some direct sun",
        Details: "Jade plants are known for their fleshy leaves and tree-like growth habit"
    },
    {   
        CommonName: "Hens and Chicks",
        ScientificName: "Sempervivum spp",
        itemImage: "su7.jpg",
        itemPrice: "12",
        Origin: "Europe, Asia",
        WateringCycle: "Allow soil to dry between waterings",
        LightRequirements: "Full sun to light shade",
        Details: "Sempervivums form clusters of rosettes and reproduce by producing 'chicks'"
    },
    {   
        CommonName: "Kalanchoe",
        ScientificName: "Kalanchoe spp",
        itemImage: "su8.jpg",
        itemPrice: "4",
        Origin: "Madagascar, Africa, Asia",
        WateringCycle: "Allow soil to dry between waterings",
        LightRequirements: "Bright light with some direct sun",
        Details: "Kalanchoes are known for their vibrant, long-lasting flowers"
    },
    {   
        CommonName: "Crown of Thorns",
        ScientificName: "Euphorbia milii",
        itemImage: "su9.jpg",
        itemPrice: "8",
        Origin: "Madagascar",
        WateringCycle: "Allow soil to dry between waterings",
        LightRequirements: "Bright light with some direct sun",
        Details: "Crown of Thorns has spiky stems and colorful bracts"
    },
    {   
        CommonName: "Aeonium",
        ScientificName: "Aeonium spp",
        itemImage: "su10.avif",
        itemPrice: "5",
        Origin: "Canary Islands, North Africa",
        WateringCycle: "Allow soil to dry between waterings",
        LightRequirements: "Full to partial sun",
        Details: "Aeoniums often have striking rosette shapes and can vary in color"
    },
    {   
        CommonName: "String of Pearls",
        ScientificName: "Senecio rowleyanus",
        itemImage: "su11.jpg",
        itemPrice: "6",
        Origin: "South Africa",
        WateringCycle: "Allow soil to dry before watering",
        LightRequirements: "Bright, indirect sunlight",
        Details: "String of Pearls features trailing stems with bead-like leaves"
    },
    {   
        CommonName: "Cobweb Houseleek",
        ScientificName: "Sempervivella spp",
        itemImage: "su12.jpeg",
        itemPrice: "9",
        Origin: "Europe",
        WateringCycle: "Allow soil to dry between waterings",
        LightRequirements: "Full sun to light shade",
        Details: "Cobweb Houseleek has rosettes with fine white hairs, giving a cobweb-like appearance"
    }
]
let addToCartItems = []
function addItems() {
    document.querySelector(".cardContainer").innerHTML = ""
    for (var i = 0; i < succulent.length; i++) {
        document.querySelector(".cardContainer").innerHTML += `
            <div class="col-md-3">
                <div class="card shadow card${i}">
                    <div class="cardImage">
                        <img src="img/${succulent[i].itemImage}" alt="${succulent[i].CommonName}">
                    </div>
                    <div class="cardContent">
                        <h3 class=" colour">${succulent[i].CommonName}</h3>
                        <h4 class=" colour">${succulent[i].ScientificName}</h4>
                        <p  class=" colour">$${succulent[i].itemPrice}</p>
                        <button class=" but" type="button" onclick="addToCart('${i}')">add to cart</button>
                    </div>
                </div>
            </div>
        `
    }
}
addItems()
cartItemsFetch()
function addToCart(elementId){
    addToCartItems.push(succulent[elementId])
    cartItemsFetch()
}
function deleteItem(elementId){
    addToCartItems.splice(elementId,1);
    cartItemsFetch()
}
function cartItemsFetch(){
    if(addToCartItems.length == 0){
        document.querySelector(".mainContainer .addToCartContainer .addedItems ").innerHTML = `
            <div class="card shadow-3">
                <div class="alert alert-danger w-100 text-center m-0">Your cart is empty!!!</div>
            </div>
        `
        document.querySelector(".mainContainer .addToCartContainer .toggler .cartCount").innerHTML = 0
        document.querySelector(".mainContainer .addToCartContainer .totalContainer span").innerHTML = 0
        document.querySelector(".mainContainer .addToCartContainer .totalContainer").style.display = "none"
    } else {
        let total = 0
        document.querySelector(".mainContainer .addToCartContainer .toggler .cartCount").innerHTML = addToCartItems.length
        document.querySelector(".mainContainer .addToCartContainer .addedItems").innerHTML = ""
        for(var i=0; i<addToCartItems.length; i++){
            document.querySelector(".mainContainer .addToCartContainer .addedItems").innerHTML += `
            <div class="card shadow cardItem${i}">
            <div class="cardImage">
            <img src="img/${addToCartItems[i].itemImage}" alt="${addToCartItems[i].CommonName}">
            </div>
            <div class="cardContent colour">
            <h3 class="colour">${addToCartItems[i].CommonName}</h3>
            <div class="group">
            <p>$. <span>${addToCartItems[i].itemPrice}</span>/-</p>
            <button class="but" type="button" onclick="deleteItem('${i}')"><i class="fas fa-trash"></i></button>
            </div>
                </div>
            </div>
            `
            total+=parseInt(addToCartItems[i].itemPrice)
        }
        document.querySelector(".mainContainer .addToCartContainer .totalContainer span").innerHTML = total
        document.querySelector(".mainContainer .addToCartContainer .totalContainer").style.display = ""
    }
}
function cartToggler(){
    document.querySelector(".mainContainer .addToCartContainer").classList.toggle("active")
    if(document.querySelector(".mainContainer .addToCartContainer").classList.contains("active")){
        document.querySelector(".mainContainer .addToCartContainer .toggler i").classList.add("fa-times")
        document.querySelector(".mainContainer .addToCartContainer .toggler i").classList.remove("fa-cart-plus")
    } else {
        document.querySelector(".mainContainer .addToCartContainer .toggler i").classList.remove("fa-times")
        document.querySelector(".mainContainer .addToCartContainer .toggler i").classList.add("fa-cart-plus")
    }
}
var input = /^[0-9a-zA-Z]{1,}[@]{1}[a-z]{1,}[.]{1}[a-z]{2,3}$/

function sub() {
    alert("Sucessfully Subscribe");
}

var input = /^[0-9a-zA-Z]{1,}[@]{1}[a-z]{1,}[.]{1}[a-z]{2,3}$/