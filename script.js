

                /*HAMBURGER NAV*/

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = navMenu.querySelectorAll('a');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  document.body.classList.toggle('nav-menu-open');
  hamburger.classList.toggle('open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    document.body.classList.remove('nav-menu-open');
    hamburger.classList.remove('open');
  });
});

              /*IMAGE-CURTAIN*/

document.addEventListener('scroll', function() {
  const curtainContainer = document.querySelector('.curtain-container');
  const containerPosition = curtainContainer.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 0.7;

  if (containerPosition < screenPosition) {
      curtainContainer.classList.add('active');
  }
});


const container = document.querySelector('.infinite-scroll-container');
const content = document.querySelector('.infinite-scroll-content');

let scrollPosition = 0;
let scrollSpeed = 1; // Adjust the scroll speed to your liking

// Clone the content to create an infinite loop
const clonedContent = content.cloneNode(true);
clonedContent.style.marginLeft = `${content.offsetWidth}px`;
container.appendChild(clonedContent);

function animateScroll() {
  scrollPosition -= scrollSpeed;
  content.style.transform = `translateX(${scrollPosition}px)`;
  clonedContent.style.transform = `translateX(${scrollPosition}px)`;

  if (scrollPosition < -content.offsetWidth) {
    scrollPosition = 0;
  }

  requestAnimationFrame(animateScroll);
}

animateScroll();

                /*cv-download*/
const cvButton = document.getElementById('cv-button');
const button2 = document.getElementById('more-button');

cvButton.addEventListener('click', (event) => {
  const link = document.createElement('a');
  link.href = 'https://drive.google.com/uc?export=download&id=1h2QeuWLlSVPBYezUdbn2fjHBqz33T5tn';
  link.download = 'JasonsPortfolio.pdf';
  link.click();
});


button2.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href ='https://drive.google.com/uc?export=download&id=1h2QeuWLlSVPBYezUdbn2fjHBqz33T5tn';
  link.download = 'JasonsPortfolio.pdf';
  link.click();
})


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('message-form');

  form.addEventListener('submit', (event) => {
      event.preventDefault();

      emailjs.sendForm('service_u1xnleh', 'template_rkfo3kp', form)
          .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
              alert('Thank you for your message!');
              form.reset();
          }, (error) => {
              console.log('FAILED...', error);
              alert('Failed to send the message. Please try again later.');
          });
  });
});


const comingSoonText = document.querySelector('.coming-soon-container h1');
const textToType = 'Coming Soon...';
let typingIndex = 0;

function typeText() {
  if (typingIndex < textToType.length) {
    comingSoonText.textContent += textToType[typingIndex];
    typingIndex++;
    setTimeout(typeText, 100); 
  }
}

typeText();

