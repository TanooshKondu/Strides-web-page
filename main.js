const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", scrollRevealOption);

ScrollReveal().reveal(".header__container h4", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__container .section__header", scrollRevealOption);
ScrollReveal().reveal(".about__container .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__container .about__flex", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__container .btn", {
  ...scrollRevealOption,
  delay: 1500,
});

// discover container
ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card__content", {
  ...scrollRevealOption,
  interval: 500,
  delay: 200,
});

// blogs container
ScrollReveal().reveal(".blogs__card", {
  duration: 1000,
  interval: 400,
});

// journals container
ScrollReveal().reveal(".journals__card", {
  ...scrollRevealOption,
  interval: 400,
});

//<<<<<---------------------Count Down Code ---------------------------------->>>>>>>

function countdown() {
  const targetDate = new Date('March 2, 2024 00:00:00').getTime();
  
  const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById('days').innerText = formatTime(days);
  document.getElementById('hours').innerText = formatTime(hours);
  document.getElementById('minutes').innerText = formatTime(minutes);
  document.getElementById('seconds').innerText = formatTime(seconds);
  
  if (distance < 0) {
      clearInterval(interval);
      document.getElementById('countdown').innerText = 'EXPIRED';
  }
  }, 1000);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();
//
//
//
//
{/* <div class="gallery__container">
<h2 class="section__header">Gallery photos</h2>
<p class="section__subheader">
  Our Department's recent event Talent Expo!.
</p>
<div class="gallery__grid">
  <div class="gallery__card">
    <img src="assets/gallery-1.jpg" alt="gallery" />
    <div class="gallery__content">
      <h4>Talent Expo</h4>
      <p>CSE(AI&ML)</p>
    </div>
  </div>
  <div class="gallery__card">
    <img src="assets/gallery-2.jpg" alt="gallery" />
    <div class="gallery__content">
      <h4>Faculty</h4>
      <p>CSE(AI&ML)</p>
    </div>
  </div>
  <div class="gallery__card">
    <img src="assets/gallery-3.jpg" alt="gallery" />
    <div class="gallery__content">
      <h4>Talent Expo</h4>
      <p>Student Team</p>
    </div>
  </div>
  <div class="gallery__card">
    <img src="assets/gallery-4.jpg" alt="gallery" />
    <div class="gallery__content">
      <h4>Dr. M. Satish</h4>
      <p>Vice President</p>
    </div>
  </div>
  <div class="gallery__card">
    <img src="assets/gallery-5.jpg" alt="gallery" />
    <div class="gallery__content">
      <h4>Dr. K. Satyanarayana</h4>
      <p>Principal</p>
    </div>
  </div>
</div>
</div>
</section>

<section class="contact" id="contact">
<div class="section__container contact__container">
<div class="contact__col">
  <h4>HEAD OF THE DEPARTMENT</h4>
  <p>Dr. A. RADHA KRISHNA <br>PROFESSOR</p>
</div>
<div class="contact__col">
  <h4>FACULTY COORDINATOR</h4>
  <p>A . JANARDHANA RAO<br>ASST PROFESSOR</p>
</div>
<div class="contact__col">
  <div class="contact__card">
    <span><i class="ri-phone-line"></i></span>
    <h4>Contact us</h4>
    <h5>ROHAN CHIKATLA</h5>
    <p>8977944161</p>
    <h5>SHAIK FARHA</h5>
    <p>9542502991</p>
  </div>
</div>
<div class="contact__col">
  <div class="contact__card">
    <span><i class="ri-phone-line"></i></span>
    <h4>Contact us</h4>
    <h5>SUBHASH VILLA</h5>
    <p>7013749014</p>
    <h5>SRUJUNA PYNNI</h5>
    <p>6281395226</p>
  </div>
</div>
</div>
</section>

<section class="footer">
<div class="section__container footer__container">
<h4>E-Artifact.</h4>
<div class="footer__socials">
  <span>
    <a href="https://www.instagram.com/e_artifact2024"><i class="ri-instagram-fill"></i></a>
  </span>
</div>
<h3>Web Developer</h3>
<div>
  <div class="dev_card">
    <p>K.Tanoosh - 9110526575</p>
  </div>
</div> */}
