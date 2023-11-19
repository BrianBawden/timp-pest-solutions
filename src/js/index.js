
const burger = document.querySelector(".bg-bars") 


function burgerMenu() {
  const menuLinks = document.querySelector(".links")

  if (menuLinks.classList.contains("hide")){
    menuLinks.classList.add("show");
    menuLinks.classList.remove("hide");
  }
  else{
    menuLinks.classList.add("hide");
    menuLinks.classList.remove("show");

  }
  
}
burger.addEventListener("click", function() {
  burgerMenu();
})