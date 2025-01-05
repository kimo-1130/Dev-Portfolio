// Count Down Start
let seconds = document.getElementById("seconds");
let minutes = document.getElementById("minutes");

setInterval(() => {
  seconds.textContent--;
  if (seconds.textContent == -1) {
    seconds.textContent = 59;
    minutes.textContent--;
  }
}, 1000);

// Count Down End

// Count Up Start
let numbers = document.querySelectorAll(".number");
let page = document.querySelector(".status-page");
let reached = false;

window.onscroll = function () {
  if (window.scrollY >= page.offsetTop) {
    if (!reached) {
      numbers.forEach((el) => {
        let goal = el.getAttribute("data-goal");
        let intervl = setInterval(
          () => {
            el.textContent++;
            if (el.textContent == goal) {
              clearInterval(intervl);
            }
          },
          1500 / goal,
          el
        );
        reached = true;
      });
    }
  }
};

// Count Up End
let last_link = document.getElementById("last-link");
let mega_menu = document.querySelector(".mega-menu");

last_link.onmouseenter = function () {
  mega_menu.style.cssText = "opacity: 1; top: 1px; z-index: 2;";
};
last_link.onmouseleave = function () {
  setTimeout(() => {
    if (!mega_menu.matches(":hover")) {
      mega_menu.style.cssText = "opacity: 0; top: 20px;";
    }
  }, 100);
};

mega_menu.onmouseenter = function () {
  mega_menu.style.cssText = "opacity: 1; top: 1px; z-index: 2;";
};
mega_menu.onmouseleave = function () {
  mega_menu.style.cssText = "opacity: 0; top: 20px;";
};
