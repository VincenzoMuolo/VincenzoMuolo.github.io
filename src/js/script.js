/****************
   Go to source code
****************/
function go_to(project) {
   switch (project.getAttribute("data-pr")) {
      case "pr1": {
         window.open("https://github.com/VincenzoMuolo/Frontend-Mentor-Challenges/tree/main/1-Newbie/single-price-grid-component-master", "_blank");
      }
      case "pr2": {
         window.open("https://github.com/VincenzoMuolo/Frontend-Mentor-Challenges/tree/main/1-Newbie/four-card-feature-section-master", "_blank");
      }
      case "pr3": {
         window.open("https://github.com/VincenzoMuolo/Frontend-Mentor-Challenges/tree/main/1-Newbie/3-column-preview-card-component-main", "_blank");
      }
      case "pr4": {
         window.open("https://github.com/VincenzoMuolo/Frontend-Mentor-Challenges/tree/main/1-Newbie/stats-preview-card-component-main", "_blank");
      }
      case "pr5": {
         window.open("https://github.com/VincenzoMuolo/Frontend-Mentor-Challenges/tree/main/1-Newbie/article-preview-component-master", "_blank");
      }
      case "pr6": {
         window.open("https://github.com/VincenzoMuolo/Frontend-Mentor-Challenges/tree/main/1-Newbie/base-apparel-coming-soon-master", "_blank");
      }
      case "pr7": {
         window.open("https://github.com/VincenzoMuolo/Frontend-Mentor-Challenges/tree/main/1-Newbie/faq-accordion-card-main", "_blank");
      }
      case "pr8": {
         window.open("https://github.com/VincenzoMuolo/Frontend-Mentor-Challenges/tree/main/1-Newbie/social-proof-section-master", "_blank");
      }
   }
}

/*************************
   Live demonstration
**************************/
function live_demo(project) {
   switch (project.getAttribute("data-pr")) {
      case "pr1": {
         window.open("https://vincenzomuolo.github.io/Frontend-Mentor-Challenges/1-Newbie/single-price-grid-component-master/index.html", "_blank");
      }
      case "pr2": {
         window.open("https://vincenzomuolo.github.io/Frontend-Mentor-Challenges/1-Newbie/four-card-feature-section-master/html/index.html", "_blank");
      }
      case "pr3": {
         window.open("https://vincenzomuolo.github.io/Frontend-Mentor-Challenges/1-Newbie/3-column-preview-card-component-main/index.html", "_blank");
      }
      case "pr4": {
         window.open("https://vincenzomuolo.github.io/Frontend-Mentor-Challenges/1-Newbie/stats-preview-card-component-main/html/index.html", "_blank");
      }
      case "pr5": {
         window.open("https://vincenzomuolo.github.io/Frontend-Mentor-Challenges/1-Newbie/article-preview-component-master/index.html", "_blank");
      }
      case "pr6": {
         window.open("https://vincenzomuolo.github.io/Frontend-Mentor-Challenges/1-Newbie/base-apparel-coming-soon-master/index.html", "_blank");
      }
      case "pr7": {
         window.open("https://vincenzomuolo.github.io/Frontend-Mentor-Challenges/1-Newbie/faq-accordion-card-main/html/index.html", "_blank");
      }
      case "pr8": {
         window.open("https://vincenzomuolo.github.io/Frontend-Mentor-Challenges/1-Newbie/social-proof-section-master/index.html", "_blank");
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
let delay = 0;
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
const hiddenProject = document.querySelectorAll(".hidden-project");
hiddenProject.forEach((el) => observer.observe(el));

/* setTimeout(() => {}, 1500); */

/*********************
   Move navbar on scroll 
 ********************/
function scrollFunction(pageDepth) {
   const nav_change = document.getElementById("nav");
   const link_change = document.querySelectorAll("a[data-nav]");

   if (window.scrollY > pageDepth) {
      nav_change.classList.remove("nav--horizontal");
      if (window.innerWidth >= 768) {
         nav_change.classList.remove("nav--mobile");
         nav_change.classList.add("nav--vertical");
      } else {
         nav_change.classList.remove("nav--vertical");
         nav_change.classList.add("nav--mobile");
      }
      link_change.forEach((link) => {
         link.classList.add("to-left");
      });
   } else {
      if (window.innerWidth >= 768) {
         nav_change.classList.remove("nav--vertical");
      } else {
         nav_change.classList.remove("nav--mobile");
      }
      link_change.forEach((link) => {
         link.classList.remove("to-left");
      });
      nav_change.classList.add("nav--horizontal");
   }
}

window.addEventListener("scroll", () => scrollFunction(100));

/*********************
   Reduce images opacity
*********************/
const images = document.querySelectorAll("img[data-img]");
images.forEach((image) => {
   image.style = "filter: opacity(80%)";
});

/*********************
   nav menù open
*********************/
function show_menu(operation) {
   let delay = 0;
   const menu_icon = document.getElementById("icon_m");
   const cross_icon = document.getElementById("icon_c");
   const links = document.querySelectorAll("a[data-nav]");
   const nav = document.getElementById("nav");

   if (operation === "open") {
      menu_icon.classList.add("hide_icon");
      cross_icon.classList.remove("hide_icon");
      if (nav.classList.contains("nav--horizontal")) {
         links.forEach((link) => {
            setTimeout(() => {
               link.style.visibility = "visible";
               link.style.transform = "translateX(0)";
            }, (delay += 75));
         });
      } else if (nav.classList.contains("nav--mobile")) {
         links.forEach((link) => {
            setTimeout(() => {
               link.style.visibility = "visible";
               link.style.transform = "translateX(0)";
            }, (delay += 75));
         });
      }
   } else if (operation === "close") {
      menu_icon.classList.remove("hide_icon");
      cross_icon.classList.add("hide_icon");
      if (nav.classList.contains("nav--horizontal")) {
         links.forEach((link) => {
            setTimeout(() => {
               link.style.visibility = "hidden";
               link.style.transform = "translateX(15em)";
            }, (delay += 75));
         });
      } else if (nav.classList.contains("nav--mobile")) {
         links.forEach((link) => {
            setTimeout(() => {
               link.style.visibility = "hidden";
               link.style.transform = "translateX(100%)";
            }, (delay += 75));
         });
      }
   }
}

/*****************************
   Auto close menu after input
*****************************/

const links = document.querySelectorAll("a[data-nav]");
if (window.innerWidth < 768) {
   links.forEach((link) => {
      link.addEventListener("click", function () {
         show_menu("close");
      });
   });
}
