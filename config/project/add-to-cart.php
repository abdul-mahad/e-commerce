<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--=============== FAVICON ===============-->
    <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon">

    <!--=============== REMIX ICONS ===============-->
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
     <link rel="stylesheet" href="add-to-cart.css"> 
    <title>products Us</title>
</head>
<body>
     <!--==================== HEADER ====================-->
     <header class="header" id="header">
        <nav class="nav container">
            <a href="index.php" class="nav__logo">
          PlantPalace
            </a>

            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                    <li class="nav__item">
                        <a href="index.php" class="nav__link active-link">Home</a>
                    </li>
                    <li class="nav__item">
                        <a href="abdout.php" class="nav__link">About</a>
                    </li>
                    <li class="nav__item">
                        <a href="add-to-cart.php" class="nav__link">Products</a>
                    </li>
                    <li class="nav__item">
                        <a href="faqs.php" class="nav__link">FAQs</a>
                    </li>
                    <li class="nav__item">
                        <a href="contact.php" class="nav__link">Contact Us</a>
                    </li>
                </ul>

                    <div class="nav__close" id="nav-close">
                        <i class="ri-close-line"></i>
                    </div>
                </div>

                <div class="nav__btns">
                    <!-- Theme change button -->
                    <i class="ri-moon-line change-theme" id="theme-button"></i>

                    <div class="nav__toggle" id="nav-toggle">
                        <i class="ri-menu-line"></i>
                    </div>
                </div>
            </nav>
         
    </header>
                

    <!-- ////////////////////////////////////////////////////////////////// -->
<br>
<br>
<br>
<div class="probutton">
    <a href="indoor.php"><button class="but" type="button">Indoor</button></a>
    <a href="outdoor.php"><button class="but" type="button">Outdoor</button></a>
    <a href="succulents.php"><button class="but" type="button">Succulents</button></a>
    <a href="shrubs.php"><button class="but" type="button">Flowering Shrubs</button></a>
</div>

<div class="mainContainer">

        <div class="container cardContainer py-5">
            <!-- <div class="col-md-3">
                <div class="card">
                    <div class="cardImage">
                        <img src="images/itemOne.png" alt="">
                    </div>
                    <div class="cardContent">
                        <h3>card</h3>
                        <button class="btn btn-primary" type="button">add</button>
                    </div>
                </div>
            </div> -->
            
        </div>
        <div class="addToCartContainer my-4">
            <div class="toggler" onclick="cartToggler()"><i class="fas fa-cart-plus"></i><div class="cartCount">0</div></div>
            <div class="addedItems">
                <!-- <div class="card shadow-3">
                    <div class="alert alert-danger w-100 text-center m-0">Your cart is empty!!!</div>
                </div> -->
                <!-- <div class="card shadow">
                    <div class="cardImage">
                        <img src="images/itemOne.png" alt="">
                    </div>
                    <div class="cardContent">
                        <h3>card</h3>
                        <div class="group">
                            <p>Rs. <span>200</span>/-</p>
                            <button class="btn btn-danger" type="button"><i class="fas fa-trash"></i></button>
                        </div>
                    </div>
                </div> -->
            </div>
            <div class="totalContainer ">Total: $ <span>0</span>/-</div>
        </div>
    </div>
    <!--==================== FOOTER ====================-->
    <footer class="footer section">
        <div class="footer__container container grid">
            <div class="footer__content">
                <a href="index.html" class="footer__logo">
                 Plantex
                </a>

                <h3 class="footer__title">
                    Subscribe to our Page Nerdherd <br> to stay update
                </h3>

               
                <div class="footer__subscribe">
                <form action="" class="contact__form" id="contact-form" onsubmit="return validateForm1();">
            <input type="email" placeholder="Enter your email" class="footer__input"  required>

                    <button class="button button--flex footer__button" style=" margin-left: 264px;" >
                        Subscribe
                        <i class="ri-arrow-right-up-line button__icon"></i>
                    </button>
                </div>
           
              </form>
                 </div>


            <div class="footer__content">
                <h3 class="footer__title">Our Pages</h3>

                <ul class="footer__data">
                    <li  class="footer__information">
                        <a href="contact.html" class="nav__link" > Aptech</a></li>
                    <li  class="footer__information">
                        <a href="abdout.html" class="nav__link" > index</a></li>
                    <li  class="footer__information">
                        <a href="add-to-cart.html" class="nav__link" > Add-to-cart</a></li>
              
                </ul>
            </div>

            <div class="footer__content">
                <h3 class="footer__title">Contact Us</h3>

                <ul class="footer__data">
                    <li class="footer__information"><a href="contact.html" class="nav__link" >111 111 111</a></li>
                    
                    <div class="footer__social">
                        <a href="https://www.facebook.com/" class="footer__social-link">
                            <i class="ri-facebook-fill"></i>
                        </a>
                        <a href="https://www.instagram.com/" class="footer__social-link">
                            <i class="ri-instagram-line"></i>
                        </a>
                        <a href="https://twitter.com/" class="footer__social-link">
                            <i class="ri-twitter-fill"></i>
                        </a>
                    </div>
                </ul>
            </div>

            <div class="footer__content">
                <h3 class="footer__title">
                    We accept all credit cards
                </h3>

                <div class="footer__cards">
                    <img src="img/card1.png" alt="" class="footer__card">
                    <img src="img/card2.png" alt="" class="footer__card">
                    <img src="img/card3.png" alt="" class="footer__card">
                    <img src="img/card4.png" alt="" class="footer__card">
                </div>
            </div>
        </div>

        <p class="footer__copy">&#169; Nerdherd. All rigths reserved</p>
    </footer>

    <a href="#" class="scrollup" id="scroll-up"> 
        <i class="ri-arrow-up-fill scrollup__icon"></i>
    </a>
</body>
<script src="script.js"></script>
<script src="faqs.js"></script>
</html>