const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-link");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrolRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header-container h1", {
  ...scrolRevealOption,
});
ScrollReveal().reveal(".header-container form", {
  ...scrolRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header-container img", {
  ...scrolRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".range-card", {
  duration: 1000,
  interval: 500,
});
ScrollReveal().reveal(".location-image img", {
  ...scrolRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".location-content .section-header", {
  ...scrolRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".location-content p", {
  ...scrolRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".location-content .location-btn", {
  ...scrolRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".story-card", {
  ...scrolRevealOption,
  interval: 500,
});

const selectCards = document.querySelectorAll(".select-card");
selectCards[0].classList.add("show-info");

const price = ["225", "455", "275", "625", "395"];

const priceEl = document.getElementById("select-price");

function updateSwiperImage(eventName, args) {
  if (eventName === "slideChangeTransitionStart") {
    const index = args && args[0].realIndex;
    priceEl.innerText = price[index];
    selectCards.forEach((item) => {
      item.classList.remove("show-info");
    });
    selectCards[index].classList.add("show-info");
  }
}

const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    depth: 500,
    modifier: 1,
    scale: 0.75,
    slideShadows: false,
    stretch: -100,
  },
  onAny(event, ...args) {
    updateSwiperImage(event, args);
  },
});

const banner = document.querySelector(".banner-wrapper");

const bannerContent = Array.from(banner.children);

bannerContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  banner.appendChild(duplicateNode);
});

ScrollReveal().reveal(".download-image img", {
  ...scrolRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".download-content .section-header", {
  ...scrolRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".download-links", {
  ...scrolRevealOption,
  delay: 1000,
});
