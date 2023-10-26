
// ----------------------------add to chart-------------
let outdoor = [
    {
        CommonName: "Rose",
        ScientificName: "Rosa spp",
        itemImage: "ou1.jfif",
        itemPrice: "18",
        Origin: "Various regions around the world",
        Watering: "Regular watering; avoid waterlogged soil",
        Light: "Full sun to partial shade",
        Other: "Prized for their fragrant flowers, available in various colors"
    },
    {    
        CommonName: "Lavender",
        ScientificName: "Lavandula spp",
        itemImage: "ou2.jpg",
        itemPrice: "6",
        Origin: "Mediterranean region",
        Watering: "Well-drained soil; allow soil to dry between waterings",
        Light: "Full sun",
        Other: "Aromatic leaves, attractive to pollinators"
    },
    { 
        CommonName: "Geranium",
        ScientificName: "Pelargonium spp",
        itemImage: "ou3.jpg",
        itemPrice: "5",
        Origin: "South Africa",
        Watering: "Allow soil to dry between waterings",
        Light: "Full sun to partial shade",
        Other: "Colorful flowers, often used in containers"
    },
    {
        CommonName: "Hydrangea",
        ScientificName: "Hydrangea spp",
        itemImage: "ou4.jpg",
        itemPrice: "8",
        Origin: "Asia and Americas",
        Watering: "Keep soil consistently moist",
        Light: "Part shade to filtered sun",
        Other: "Large, showy flower clusters; flower color can change based on soil pH"
    },
    {
        CommonName: "Bougainvillea",
        ScientificName: "Bougainvillea spp",
        itemImage: "ou5.jpg",
        itemPrice: "4",
        Origin: "South America",
        Watering: "Allow soil to dry slightly between waterings",
        Light: "Full sun",
        Other: "Vibrant bracts (colorful modified leaves), vining habit"
    },
    {        
        CommonName: "Cactus",
        ScientificName: "Various genera",
        itemImage: "ou6.jpg",
        itemPrice: "7",
        Origin: "Americas",
        Watering: "Allow soil to dry out completely between waterings",
        Light: "Full sun",
        Other: "Succulent plants adapted to arid conditions"
    },
    {        
        CommonName: "Tulip",
        ScientificName: "Tulipa spp",
        itemImage: "ou7.jpg",
        itemPrice: "9",
        Origin: "Central Asia",
        Watering: "Well-drained soil; water during active growth",
        Light: "Full sun to part shade",
        Other: "Spring-blooming bulb flowers, wide range of colors"
    },
    {   
        CommonName: "Sunflower",
        ScientificName: "Helianthus annuus",
        itemImage: "ou8.jpg",
        itemPrice: "10",
        Origin: "North America",
        Watering: "Regular watering; avoid waterlogged soil",
        Light: "Full sun",
        Other: "Tall, cheerful flowers, attract pollinators"
    },
    {
        
        CommonName: "Peony",
        ScientificName: "Paeonia spp",
        itemImage: "ou9.jfif",
        itemPrice: "7",
        Origin: "Europe, Asia, North America",
        Watering: "Keep soil consistently moist",
        Light: "Full sun to part shade",
        Other: "Large, fragrant flowers; long-lived perennial"
    },
    {   
        CommonName: "Lily",
        ScientificName: "Lilium spp",
        itemImage: "ou10.jpg",
        itemPrice: "18",
        Origin: "Europe, Asia, North America",
        Watering: "Keep soil consistently moist",
        Light: "Full sun to part shade",
        Other: "Fragrant, elegant flowers; various types including Asiatic, Oriental, and Trumpet lilies"
    },
    {   
        CommonName: "Japanese Maple",
        ScientificName: "Acer palmatum",
        itemImage: "ou11.jpg",
        itemPrice: "9",
        Origin: "Japan, Korea, China",
        Watering: "Keep soil consistently moist, avoid waterlogged conditions",
        Light: "Part shade to dappled sunlight",
        Other: "Ornamental tree with delicate, lobed leaves"
    },
    {
        CommonName: "Hibiscus",
        ScientificName: "Hibiscus spp",
        itemImage: "ou12.jpg",
        itemPrice: "1",
        Origin: "Tropical and subtropical regions",
        Watering: "Keep soil consistently moist",
        Light: "Full sun to part shade",
        Other: "Large, showy flowers; popular in warmer climates"
    }

]
let addToCartItems = []
function addItems() {
    document.querySelector(".cardContainer").innerHTML = ""
    for (var i = 0; i < outdoor.length; i++) {
        document.querySelector(".cardContainer").innerHTML += `
            <div class="col-md-3">
                <div class="card shadow card${i}">
                    <div class="cardImage">
                        <img src="img/${outdoor[i].itemImage}" alt="${outdoor[i].CommonName}">
                    </div>
                    <div class="cardContent">
                        <h3 class=" colour">${outdoor[i].CommonName}</h3>
                        <h4 class=" colour">${outdoor[i].ScientificName}</h4>
                        <p  class=" colour">$${outdoor[i].itemPrice}</p>
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
    addToCartItems.push(outdoor[elementId])
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