function loadChallenge(challenge) {
   switch (challenge.id) {
      case "newbie-challenge-1":
         setTimeout(function waitAnim() {
            location.href = "./1-Newbie/interactive-rating-component-main/html/index.html";
         }, 350);
         break;
      case "newbie-challenge-2":
         setTimeout(function waitAnim() {
            location.href = "./1-Newbie/product-preview-card-component-main/html/index.html";
         }, 350);
         break;
      case "newbie-challenge-3":
         setTimeout(function waitAnim() {
            location.href = "./1-Newbie/nft-preview-card-component-main/html/index.html";
         }, 350);
         break;
      case "newbie-challenge-4":
         setTimeout(function waitAnim() {
            location.href = "./1-Newbie/stats-preview-card-component-main/html/index.html";
         }, 350);
         break;
      case "newbie-challenge-5":
         setTimeout(function waitAnim() {
            location.href = "./1-Newbie/order-summary-component-main/html/index.html";
         }, 450);
         break;
      case "newbie-challenge-6":
         setTimeout(function waitAnim() {
            location.href = "./1-Newbie/four-card-feature-section-master/html/index.html";
         }, 450);
         break;
      case "newbie-challenge-7":
         setTimeout(function waitAnim() {
            location.href = "./1-Newbie/faq-accordion-card-main/html/index.html";
         }, 450);
         break;
      case "newbie-challenge-8":
         setTimeout(function waitAnim() {
            location.href = "./1-Newbie/social-proof-section-master/index.html";
         }, 450);
         break;
      case "newbie-challenge-9":
         setTimeout(function waitAnim() {
            location.href = "./1-Newbie/3-column-preview-card-component-main/index.html";
         }, 450);
         break;
      case "newbie-challenge-10":
         setTimeout(function waitAnim() {
            location.href = "/1-Newbie/article-preview-component-master/index.html";
         }, 450);
         break;
      case "newbie-challenge-11":
         setTimeout(function waitAnim() {
            location.href = "/1-Newbie/base-apparel-coming-soon-master/index.html";
         }, 450);
         break;
      case "newbie-challenge-12":
         setTimeout(function waitAnim() {
            /* /1-Newbie/single-price-grid-component-master/index.html */
         }, 200);
         break;
      default:
         break;
   }
}
/****************
Go to source code
****************/
function go_to(project) {
   switch (project.getAttribute("data-pr")) {
      case "pr1": {
         window.open("https://github.com/VincenzoMuolo/Frontend-Mentor-Challenges/tree/main/1-Newbie/single-price-grid-component-master", "_blank");
      }
   }
}
/*********************
Title typing animation
*********************/
let anim_end = false;
const separator = (id) => {
   const element = document.getElementById(id),
      text = element.innerText.split("");
   element.innerText = "";
   let delay = 0;
   text.forEach((letter, index, text) => {
      const span = document.createElement("span");
      span.innerText = letter;
      span.style.opacity = 0;
      span.style.transition = "100ms opacity ease-in-out";
      element.appendChild(span);
      setTimeout(() => {
         span.style.opacity = 1;
         if (index === text.length - 1) {
            anim_end = true;
         }
      }, (delay += 100));
   });
};

separator("header_title");

/************************************************
Interval to check if the title animation is ended 
************************************************/
let wait_anim;
if (!wait_anim) {
   wait_anim = setInterval(check_state, 1000);
}
function check_state() {
   if (anim_end == true) {
      const text = document.getElementById("header_text");
      const textbox = document.getElementById("header_textbox");
      const scroll = document.getElementById("header_scroll");
      text.classList.add("text_anim");
      textbox.classList.add("textbox_anim");
      scroll.classList.add("scroll_anim");
      clearInterval(wait_anim);
   }
}

/***********************************
 Show element if they become visible
 **********************************/
const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         entry.target.classList.add("show");
      } else {
         entry.target.classList.remove("show");
      }
   });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

setTimeout(() => {}, 1500);

/***********
Change image
***********/
function change_image(selected_image) {
   // prettier-ignore
   const images = document.querySelectorAll("img[data-img]");
   images.forEach((image) => {
      if (image == selected_image) {
         image.classList.add("active");
      } else image.classList.remove("active");
   });
}

/*********************
 Move navbar on scroll 
 ********************/
function scrollFunction(pageDepth) {
   const nav_change = document.getElementById("nav");
   const link_change = document.querySelectorAll("a[data-nav]");

   if (window.scrollY > pageDepth) {
      nav_change.classList.add("nav--vertical");
      nav_change.classList.remove("nav--horizontal");
      link_change.forEach((link) => {
         link.classList.add("to-left");
      });
   } else {
      nav_change.classList.remove("nav--vertical");
      nav_change.classList.add("nav--horizontal");
      link_change.forEach((link) => {
         link.classList.remove("to-left");
      });
   }
}

window.addEventListener("scroll", () => scrollFunction(200));

/*********************
 Reduce image opacity
 ********************/
const images = document.querySelectorAll("img[data-img]");
images.forEach((image) => {
   image.style = "filter: opacity(90%)";
});

/*****************************
Open challenge in frame
*****************************/
const icons = document.querySelectorAll("img[data-device]");
const icons_span = document.querySelectorAll("span[data-device]");
icons.forEach((icon) => {
   /* TODO */
});
