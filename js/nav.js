let nav = `
<nav id="nav">
<!-- nav contact -->
<div class="nav-contact">
    <!-- phone -->
    <div class="nav-contact-call dflex a-center">
        <i class="fas fa-phone"></i>
        <div class="nav-contact-info">
            <p class="contact-info-title">Call anytime</p>
            <a href="tel:+2349038511002">+234-903-851-1002</a>
        </div>
    </div>

    <!-- email -->
    <div class="nav-contact-call dflex a-center">
        <i class="fas fa-envelope"></i>
        <div class="nav-contact-info">
            <p class="contact-info-title">Send email</p>
            <a href="mailto:basitabrimix@gmail.com">basitabrimix@yahoo.com</a>
        </div>
    </div>

    <!-- phone -->
    <div class="nav-contact-call dflex a-center">
        <i class="fas fa-map-marker-alt"></i>
        <div class="nav-contact-info">
            <p class="contact-info-title">Address</p>
            <p class="nav-address">Onitsha, Anambra State, Nigeria</p>
        </div>
    </div>

    
    <!-- social links -->
    <div class="nav-social dflex gap10">
        <a href="#">
            <div class="dflex a-center j-center">
                <i class="fab fa-facebook-f"></i>
            </div>
        </a>
        <a href="https://www.instagram.com/p/Cfv4cASKU9l/?igshid=YmMyMTA2M2Y=">
            <div class="dflex a-center j-center">
                <i class="fab fa-instagram    "></i>
            </div>
        </a>
    </div>
</div>

<!-- nav contact ends -->

<hr>

<!-- navbar -->
<div class="nav dflex a-center wrap">
    <div class="logo dflex a-center j-center">
        <img src="images/favicon.png" alt="logo">
    </div>
    <label for="nav-menu"><i class="fas fa-bars menu-drop   "></i></label>
    <input type="checkbox" id="nav-menu">
    <div class="nav-links">
        <ul class="dflex gap10 wrap">
            <li><a href="#" class="nav-link"><p>Home</p></a></li>
            <li><a href="#about" class="nav-link"><p>About</p></a></li>
            <li><a href="#services" class="nav-link"><p>Services</p></a></li>
        </ul>
    </div>
</div>
<!-- navbar ends -->
</nav>
`;

document.getElementById('body').insertAdjacentHTML("afterbegin", nav);