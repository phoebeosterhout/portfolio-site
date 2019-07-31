function classToggle() {
  const navs = document.querySelectorAll('.navbar-items')

  navs.forEach(nav => nav.classList.toggle('navbar-ToggleShow'));
}

document.querySelector('.navbar-link-toggle')
  .addEventListener('click', classToggle);

// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
});
