function updateBackgroundImage() {
  const bg = document.querySelector(".bg");
  const img = bg.querySelector("img");

  if (window.innerWidth > 767) {
    img.src = "images/bg-intro-desktop.svg";
    bg.classList.add("desk");
  } else {
    img.src = "images/bg-intro-mobile.svg";
    bg.classList.remove("desk");
  }
}

updateBackgroundImage();

window.addEventListener("resize", updateBackgroundImage);

//!!!!!!!!!!!!!!!!!!

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const overlay = document.getElementById('overlay');
const landing = document.getElementById('landing');
const navLinks = document.querySelectorAll('#navMenu ul li a');

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  overlay.classList.remove('active');
  landing.classList.remove('active');
  document.body.classList.remove('menu-open');
}

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  overlay.classList.toggle('active');
  landing.classList.toggle('active');
  document.body.classList.toggle('menu-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

overlay.addEventListener('click', () => {
  closeMenu();
});

//!!!!!!!!!!!!!!!!!!

document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 900) {
      backToTop.style.display = 'flex';
    } else {
      backToTop.style.display = 'none';
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

//!!!!!!!!!!!!!!!!!!

document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.revealY');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('activeY');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  revealElements.forEach(el => observer.observe(el));
});

//!!!!!!!!!!!!!!!!!!


document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.revealX');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  revealElements.forEach(el => observer.observe(el));
});

//!!!!!!!!!!!!!!!!!!