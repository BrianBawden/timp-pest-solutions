
const burger = document.querySelector(".bg-bars") 


function burgerMenu() {
  const menuLinks = document.querySelector(".links")

  if (menuLinks.style.display === "" || menuLinks.style.display === "none" ){
    menuLinks.style.display = "block";
  }
  else{
    menuLinks.style.display = "none";
  }
}
burger.addEventListener("click", function() {
  burgerMenu();
})