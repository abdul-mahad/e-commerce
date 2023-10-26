<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--=============== FAVICON ===============-->
    <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon">

    <!--=============== REMIX ICONS ===============-->
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="about.css">
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
    <title>About Us</title>
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
                           <!-- --------- ----------- About Page ------------------ -->

                      
                         
                       
                       <section class="about">
                          <section class="about">
                            <div class="container">
                                <h2 class="lg-heading text-black about-heading">ABOUT US</h2>
                                <p class="text-gray">Let’s be honest. Having plants in our lives and in our homes is the most extraordinary thing ever. The second best thing is bragging about it on social media. The plant parent community is one of the most supportive, nourishing, and uplifting groups you will find online</p>
                              <div class="about-wrapper">
                                    <div class="left">
                                       <ul>
                                           <li>Certified Plants</li>
                                           <li>Healthy Plants</li>
                                           <li>All Types of Plants</li>
                                       </ul>
                                    </div>
                                    <div class="right">
                                        <ul>
                                                <li>Any Time Service</li>
                                                <li>Always Be Polide</li>
                                                <li>Give Our Best</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="counts">
                                    <div class="counts-item counts-item1">
                                  <span>2500</span>
                                  <p>Plants</p>
                                </div>
                                <div class="counts-item counts-item2">
                                   <span>400</span>
                                   <P>Countries</P>
                                </div>
                                <div class="counts-item counts-item3">
                                  <span>300</span>
                                  <P>GUIDE</P>
                                </div>
                                <div class="counts-item counts-item4">
                                    <span>20</span>
                                    <P>SPORTS</P>
                                </div>
                            </div>
                             
                            <div class="cta-banner">
                                <div class="cta-banner-left">
                                    <p class="cta-line">what are you waiting for, reach us right now.</p>
                                </div>
                                <div class="cta-banner-right">
                                    <a class='cta-btn' href='feedback.php'>Feedback Us</a>
                                </div>
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
                        <a  href="contact.html" class="nav__link"> Aptech</a></li>
                    <li  class="footer__information">
                        <a  href="FAQS.html" class="nav__link" > index</a></li>
                    <li  class="footer__information">
                        <a  href="add-to-cart.html" class="nav__link"> Add-to-cart</a></li>
              
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
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="main.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>


</html>