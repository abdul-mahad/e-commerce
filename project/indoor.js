let indoor = [
    {
        CommonName: "Snake Plant",
        ScientificName: "Sansevieria trifasciata",
        itemImage: "in1.jpg",
        itemPrice: "12",
        Origin: "West Africa",
        Watering: "Allow soil to dry between waterings; water sparingly",
        Light: "Tolerates low light but prefers indirect bright light",
        Other: "Air-purifying qualities, upright sword like leaves"
    },
    {
        CommonName: "Spider Plant",
        ScientificName: "Chlorophytum comosum",
        itemImage: "in2.jpg",
        itemPrice: "6",
        Origin: "South Africa",
        Watering: "Keep soil evenly moist, not soggy",
        Light: "Indirect bright light; can tolerate lower light conditions",
        Other: "Produces plantlets on long arching stems"
    },
    {
        CommonName: "ZZ Plant",
        ScientificName: "Zamioculcas zamiifolia",
        itemImage: "in3.jpg",
        itemPrice: "7",
        Origin: "Eastern Africa",
        Watering: "Allow soil to dry out between waterings; drought-tolerant",
        Light: "Low to moderate indirect light",
        Other: "Glossy, dark green leaves; highly tolerant of neglect"
    },
    {
        CommonName: "Swiss cheese plant",
        ScientificName: "Monstera deliciosa ",
        itemImage: "in4.jpg",
        itemPrice: "4",
        Origin: "Central America",
        Watering: "Keep soil consistently moist during growing season, let it dry slightly in winter",
        Light: "Bright, indirect light",
        Other: "Iconic split leaves; needs space to spread"
    },
    {
        CommonName: "Peace Lily",
        ScientificName: "Spathiphyllum spp",
        itemImage: "in5.jpg",
        itemPrice: "8",
        Origin: "Tropical regions of the Americas and Southeast Asia",
        Watering: "Keep soil evenly moist; drooping leaves indicate it needs water",
        Light: "Low to moderate indirect light",
        Other: "White spathe-like flowers, excellent air purifier"
    },
    {
        CommonName: "Pothos or Devil's Ivy",
        ScientificName: "Epipremnum aureum",
        itemImage: "in6.jpg",
        itemPrice: "4",
        Origin: "Mo'orea, French Polynesia",
        Watering: "Allow top inch of soil to dry between waterings",
        Light: "Tolerates a wide range of light, but prefers indirect light",
        Other: "Vining habit, variegated foliage",
    },
    {
        CommonName: "Fiddle Leaf Fig",
        ScientificName: "Ficus lyrata",
        itemImage: "in7.jpg",
        itemPrice: "8",
        Origin: "Western Africa",
        Watering: "Allow top inch of soil to dry between waterings",
        Light: "Bright, indirect light",
        Other: "Large, violin-shaped leaves; can be finicky",
    },
    {
        CommonName: "Chinese Evergreen",
        ScientificName: "Aglaonema spp",
        itemImage: "in8.jpg",
        itemPrice: "9",
        Origin: "Southeast Asia",
        Watering: "Keep soil evenly moist; more tolerant of drying out than overwatering",
        Light: "Low to moderate indirect light",
        Other: "Varied foliage colors, easy to care for"
    },
    {
        CommonName: "Aloe Vera",
        ScientificName: "Aloe barbadensis miller",
        itemImage: "in9.jpg",
        itemPrice: "10",
        Origin: "Arabian Peninsula",
        Watering: "Allow soil to dry out between deep waterings",
        Light: "Bright, indirect light",
        Other: "Succulent leaves, known for medicinal properties"
    },
    {
        CommonName: "Rubber Plant",
        ScientificName: "Ficus elastica",
        itemImage: "in10.jpg",
        itemPrice: "11",
        Origin: "Southeast Asia",
        Watering: "Keep soil slightly moist; reduce watering in winter",
        Light: "Bright, indirect light",
        Other: "Large, glossy leaves; can grow into a sizeable indoor tree"
    },
    {
        CommonName: "African Violet",
        ScientificName: "Saintpaulia spp",
        itemImage: "in11.jpg",
        itemPrice: "8",
        Origin: "East Africa",
        Watering: "Keep soil consistently moist, avoid water on leaves",
        Light: "Indirect light; avoid intense sunlight",
        Other: "Delicate, fuzzy leaves; produces colorful flowers"
    },
    {
        CommonName: "Devil's Ivy ",
        ScientificName: "Epipremnum aureum",
        itemImage: "in12.jpg",
        itemPrice: "8",
        Origin: "Mo'orea, French Polynesia",
        Watering: "Allow top inch of soil to dry between waterings",
        Light: "Tolerates a wide range of light, but prefers indirect light",
        Other: "Vining habit, heart-shaped leaves; excellent air purifier",
    }
]
let addToCartItems = []
function addItems() {
    document.querySelector(".cardContainer").innerHTML = ""
    for (var i = 0; i < indoor.length; i++) {
        document.querySelector(".cardContainer").innerHTML += `
            <div class="col-md-3">
                <div class="card shadow card${i}">
                    <div class="cardImage">
                        <img src="img/${indoor[i].itemImage}" alt="${indoor[i].CommonName}">
                    </div>
                    <div class="cardContent">
                        <h3 class=" colour">${indoor[i].CommonName}</h3>
                        <h4 class=" colour">${indoor[i].ScientificName}</h4>
                        <p  class=" colour">$${indoor[i].itemPrice}</p>
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
    addToCartItems.push(indoor[elementId])
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









function validateForm1() {
    const emailInput = document.querySelector('.footer__input[type="email"]');
    
    const email = emailInput.value;
    

    if (email.trim() === '') {
        // Display an error message
        
Swal.fire({
    title: 'Please fill in all required fields.',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
        return false; // Prevent the form from submitting
    }else{
         
Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })
    }

    if (!isValidEmail(email)) {
        // Display an error message for invalid email
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Please enter a valid email address.'
        });
        return false; // Prevent the form from submitting
    }

    // If all conditions are met, the form will submit
    return true;
}

function isValidEmail(email) {
    // Regular expression for validating email
    const emailPattern = /^[0-9a-zA-Z]{1,}[@]{1}[a-z]{1,}[.]{1}[a-z]{2,3}$/;
    return emailPattern.test(email);
}
