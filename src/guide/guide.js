document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#toggleMenu").addEventListener("click", function(e) {
    document.querySelector("#menu").classList.toggle("mobile:hidden");
    var tm = document.querySelector("#toggleMenu");
    tm.classList.toggle("icon-menu");
    tm.classList.toggle("icon-close");
  });

  // Atoms
  var atoms = document.querySelectorAll("span.atom");

  function onAtomMouseOverAndOut(e) {
    var siblings = e.target.parentNode.childNodes;
    var atom = e.target.innerText.trim().substring(1);
    for (var i = 0; i < siblings.length; i++) {
      var sibling = siblings[i].innerText.trim();
      var isDevicePrefix = sibling.indexOf(atom) > -1;
      if (!isDevicePrefix) siblings[i].classList.toggle("opac-20");
    }
  }
  for (var i = 0; i < atoms.length; i++) {
    atoms[i].addEventListener("mouseover", onAtomMouseOverAndOut);
    atoms[i].addEventListener("mouseout", onAtomMouseOverAndOut);
  }
});
