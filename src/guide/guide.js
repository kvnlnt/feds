document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#toggleMenu").addEventListener("click", function(e) {
    document.querySelector("#menu").classList.toggle("mobile:hidden");
    var tm = document.querySelector("#toggleMenu");
    tm.classList.toggle("icon-menu");
    tm.classList.toggle("icon-close");
  });
});
