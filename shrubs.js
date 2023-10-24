let shrubs = [
    {
        CommonName: "Rose",
        ScientificName: "Rosa spp",
        itemImage: "sh1.jfif",
        itemPrice: "13",
        Origin: "Various species from around the world",
        Watering: "Regular watering, well-drained soil",
        Light: "Full sun",
        Details: "Roses come in various colors and sizes. Pruning is often required for optimal flowering"
    },
    {
        CommonName: "Lilac",
        ScientificName: "Syringa spp",
        itemImage: "sh2.jpg",
        itemPrice: "6",
        Origin: "Europe and Asia",
        Watering: "Regular watering, well-drained soil",
        Light: "Full sun to light shade",
        Details: "Lilacs are known for their fragrant clusters of flowers and are best pruned after flowering"
    },
    {
        CommonName: "Azalea",
        ScientificName: "Rhododendron spp",
        itemImage: "sh3.jpg",
        itemPrice: "3",
        Origin: "Asia, North America, Europe",
        Watering: "Regular watering, well-drained acidic soil",
        Light: "Part shade",
        Details: "Azaleas produce vibrant clusters of flowers and thrive in slightly acidic soils"
    },
    {
        CommonName: "Forsythia",
        ScientificName: "Forsythia spp",
        itemImage: "sh4.jpg",
        itemPrice: "5",
        Origin: "Eastern Asia",
        Watering: "Moderate watering, well-drained soil",
        Light: "Full sun to light shade",
        Details: "Forsythias have bright yellow flowers that bloom in early spring before the leaves appear"
    },
    {
        CommonName: "Hydrangea",
        ScientificName: "Hydrangea spp",
        itemImage: "sh5.jpg",
        itemPrice: "2",
        Origin: "Asia and Americas",
        Watering: "Regular watering, well-drained soil",
        Light: "Part shade to filtered sun",
        Details: "Hydrangeas have large, showy flower heads that can change color based on soil pH"
    },
    {
        CommonName: "Crape Myrtle",
        ScientificName: "Lagerstroemia spp",
        itemImage: "sh6.jpg",
        itemPrice: "5",
        Origin: "Asia, Australia",
        Watering: "Regular watering, well-drained soil",
        Light: "Full sun",
        Details: "Crape myrtles produce colorful flowers in summer and have distinctive bark"
},
    {
        CommonName: "Weigela",
        ScientificName: "Weigela spp",
        itemImage: "sh7.jpg",
        itemPrice: "7",
        Origin: "East Asia",
        Watering: "Regular watering, well-drained soil",
        Light: "Full sun to light shade",
        Details: "Weigelas have trumpet-shaped flowers that attract hummingbirds"
    },
    {
        CommonName: "Spirea",
        ScientificName: "Spiraea spp",
        itemImage: "sh8.jpg",
        itemPrice: "10",
        Origin: "Northern Hemisphere",
        Watering: "Regular watering, well-drained soil",
        Light: "Full sun to light shade",
        Details: "Spireas have cascading clusters of flowers and come in various sizes"
    },
    {
        CommonName: "Mock Orange",
        ScientificName: "Philadelphus spp",
        itemImage: "sh9.jpg",
        itemPrice: "9",
        Origin: "Europe, North America",
        Watering: "Moderate watering, well-drained soil",
        Light: "Full sun to light shade",
        Details: "Mock oranges have fragrant white flowers resembling orange blossoms"
    },
    {
        CommonName: "Viburnum",
        ScientificName: "Viburnum spp",
        itemImage: "sh10.jpeg",
        itemPrice: "8",
        Origin: "North America, Europe, Asia",
        Watering: "Regular watering, well-drained soil",
        Light: "Full sun to part shade",
        Details: "Viburnums offer clusters of flowers and can have ornamental berries"
    },
    {
        CommonName: "Sweetspire",
        ScientificName: "Itea spp",
        itemImage: "sh11.jpeg",
        itemPrice: "6",
        Origin: "North America, Asia",
        Watering: "Regular watering, moist soil",
        Light: "Full sun to part shade",
        Details: "Sweetspires have fragrant, drooping flower spikes and vibrant fall foliage"
    },
    {
        CommonName: "Butterfly Bush",
        ScientificName: "Buddleja spp",
        itemImage: "sh12.jpg",
        itemPrice: "8",
        Origin: "Asia, Africa, Americas",
        Watering: "Regular watering, well-drained soil",
        Light: "Full sun",
        Details: "Butterfly bushes attract butterflies with their long, colorful flower spikes"
    }
]
let addToCartItems = []
function addItems() {
    document.querySelector(".cardContainer").innerHTML = ""
    for (var i = 0; i < shrubs.length; i++) {
        document.querySelector(".cardContainer").innerHTML += `
            <div class="col-md-3">
                <div class="card shadow card${i}">
                    <div class="cardImage">
                        <img src="img/${shrubs[i].itemImage}" alt="${shrubs[i].CommonName}">
                    </div>
                    <div class="cardContent">
                        <h3 class=" colour">${shrubs[i].CommonName}</h3>
                        <h4 class=" colour">${shrubs[i].ScientificName}</h4>
                        <p  class=" colour">$${shrubs[i].itemPrice}</p>
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
    addToCartItems.push(shrubs[elementId])
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