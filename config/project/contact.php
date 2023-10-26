<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--=============== FAVICON ===============-->
    <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon">

    <!--=============== REMIX ICONS ===============-->
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="contact.css">
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />

    <title>contact</title>
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

            
        </nav>
    </header>


     <!-- -----------contact Page ------------------ -->
     <section class="contact-foam">
        <div class="container">
           <div class="form-wrapper">
               <div class="company-address">
                   <div class="address-group">
                       <i class="fas fa-map-marker-alt fa-3x text-red"></i>
                       <h2 class="text-gray md-heading" style="color: black;">Location</h2>
                       <p style="color: black;"> <a href="https://www.google.com/maps/ " target="_blank" style="color: black;" >shah faisal green town karachi.</a> </p>
                   </div>
                   <div class="address-group">
                       <i class="far fa-envelope fa-3x text-red"></i>
                       <h2 class="text-gray md-heading" style="color: black;">Email</h2>
                       <p style="color: black;" > <a href="https://gmail.com/ " target="_blank " style="color: black;" >abdulmahad012@gmail.com</a> </p>
                   </div>
                   <div class="address-group">
                       <i class="fas fa-phone-square-alt fa-3x text-red"></i>
                       <h2 class="text-gray md-heading" style="color: black;">Call</h2>
                       <p style="color: black;" > <a href="https://photocall.tv/" style="color: black;"> +92347895084</a></p>
                   </div>
                   <img src="img/contact image.jpg" alt="company image">
               </div>
              <form action="" class="contact__form form" id="contact-form" onsubmit="return validateForm();">>
                  <h1 class="text-black lg-heading">contact us</h1>
                  <p class="text-gray" style="color: black;">let us know your questions, suggestions and concerns by filling out the contact from the below.</p>
                  <div class="form-group">
                      <label for="username" style="color: black;">Username</label>
                      <input type="text" class="username" required>
                  </div>
                  <div class="form-group">
                   <label for="email" style="color: black;">Email</label>
                   <input type="email" class="email">
                  </div>
                  <div class="form-group">
                   <label for="phone" style="color: black;">Phone</label>
                   <input type="number" class="phone"required>
                  </div>
                  <div class="form-group">
                      <label for="message" style="color: black;">message</label>
                      <textarea name="" id="message"></textarea>
                   </div>
                      <button type="submit" class="form-btn" onclick="submt()">submit</button>
                  
              </form>
           </div>
        </div>
         
       
     </section>
    <!--==================== FOOTER ====================-->
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
            <input type="email" placeholder="Enter your email" class="footer__input"  >

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
                    <a   href="abdout.html" class="nav__link"> Aptech</a></li>
                <li  class="footer__information">
                    <a href="index.html" class="nav__link" > index</a></li>
                <li  class="footer__information">
                    <a href="faqs.html" class="nav__link" > Add-to-cart</a></li>
          
            </ul>
        </div>

        <div class="footer__content">
            <h3 class="footer__title">Contact Us</h3>

            <ul class="footer__data">
                <li class="footer__information" class="nav__link" >111 111 111</li>
                
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
<script src="main.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</html>