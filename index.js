function desplegarMenu(){
var botonMenu = document.getElementById("boton-menu");
var ul = document.getElementById("ul");

botonMenu.addEventListener("click", function() {
  if (ul.style.display === "none") {
    ul.style.display = "block";
  } else {
    ul.style.display = "none";
  }
});
}

desplegarMenu();
