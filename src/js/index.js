
function burgerMenu() {
  const menuLinks = document.querySelector(".links")

  if (menuLinks.style.display === "none"){
    menuLinks.style.display = "block";
  }
  else{
    menuLinks.style.display = "none";
  }
}