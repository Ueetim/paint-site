let btns = `<!-- back-to-top button starts -->

<a href="#">
    <button class="top-btn">
        <i class="fas fa-arrow-up"></i>
    </button>
</a>

<!-- back-to-top button ends -->

<!-- contact-btn -->

<div class="contact-popup">
    <button class="con-btn dflex j-center a-center">
        <span class="material-icons">phone_in_talk</span>
    </button>
    <div class="contact-popup-info">
        <div class="footer-contact-item dflex gap10 a-center" data-aos="fade-up" data-aos-delay="400">
            <i class="fas fa-phone"></i>
            <a href="tel:+2349038511002">+234-903-851-1002</a>
        </div>
        <div class="footer-contact-item dflex gap10 a-center" data-aos="fade-up" data-aos-delay="600">
            <i class="fas fa-envelope"></i>
            <a href="mailto:basitabrimix@yahoo.com">basitabrimix@yahoo.com</a>
        </div>
        <div class="footer-contact-item dflex gap10 a-center" data-aos="fade-up" data-aos-delay="800">
            <i class="fas fa-map-marker-alt"></i>
            <p>Onitsha, Anambra State, Nigeria</p>
        </div>
        <i class="fas fa-caret-down caret-icon   "></i>
    </div>
</div>

<!-- contact-btn ends -->`;

document.getElementById('body').insertAdjacentHTML("beforeend", btns);