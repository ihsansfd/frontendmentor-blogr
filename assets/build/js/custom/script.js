// const navbarToggler = document.querySelector(".navbar-toggler-icon");

// navbarToggler.addEventListener("click", (event) => {
//   const navbar = navbarToggler.closest(".site-navbar");
//   const navbarCollapse = document.querySelector(
//     ".site-navbar__navbar-collapse"
//   );
//   console.log(navbarCollapse.classList.contains("show") === true);
// });

const navbar = document.querySelector(".site-navbar");
const navbarCollapse = navbar.querySelector(".site-navbar__navbar-collapse");
const navbarToggler = navbar.querySelector(".navbar-toggler-icon");

const options = {
  attributes: true,
};

function callback(mutationList, observer) {
  mutationList.forEach((mutation) => {
    if (mutation.target.classList.contains("show")) {
      const hai = 0;
      navbarToggler.style.backgroundImage =
        "url('/assets/build/images/icon-close.svg')";

      return;
    } else {
      navbarToggler.style.backgroundImage =
        "url('/assets/build/images/icon-hamburger.svg')";
    }
  });
}

const observer = new MutationObserver(callback);
observer.observe(navbarCollapse, options);
