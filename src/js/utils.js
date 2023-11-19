
const burger = document.querySelector(".bg-bars") // burger is the hamburger button for the mobile view drop down
const head = document.querySelector("#head");
const headFile = "/src/partials/head.html";
const header = document.querySelector("#header");
const headerFile = "/src/partials/header.html";
const footer = document.querySelector("#footer");
const footerFile = "/src/partials/footer.html";
// burgerMenu will add or remove the class hide/show to display the dropdown menu
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

// evenListener takes two parameters btn: the button clicked. action: function to be called on click. 
function eventListener(btn, action){
  btn.addEventListener("click", function(event){
    action(event, btn);
  })
}

// gets and sets html for consistent layout of pages. location is the querySelector and file is the path to the content being added.
async function addHtmlContent(location, file) {
  try{
    //get html content
    const response = await fetch(file)
    const html = await response.text()

    location.innerHTML = html;
  } catch{
    console.log(`addContent failed at ${file}.`)
  }
}
// called functions
addHtmlContent(head, headFile);
addHtmlContent(header, headerFile);
addHtmlContent(footer, footerFile);
eventListener(burger, burgerMenu);
