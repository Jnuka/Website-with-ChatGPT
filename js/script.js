document.addEventListener("DOMContentLoaded", function() {
  let modal = document.querySelector(".overlay");
  let openButtons = document.querySelectorAll(".header__button, .hero__button");

  openButtons.forEach(button => {
      button.addEventListener("click", function() {
          modal.classList.remove("hidden");
      });
  });

  modal.addEventListener("click", function(event) {
      if (event.target === modal) {
          modal.classList.add("hidden");
      }
  });
});