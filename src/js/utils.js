
const burger = document.querySelector(".bg-bars") // burger is the hamburger button for the mobile view drop down
const head = document.querySelector("#head");
const headFile = "/src/partials/head.html";
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

//evenListener takes two parameters btn: the button clicked. action: function to be called on click. 
function eventListener(btn, action){
  btn.addEventListener("click", function(event){
    action(event, btn);
  })
}

// get html for consistent layout of pages.
async function addContent(location, file) {
  try{
    //get html content
    const response = await fetch(file)
    console.log("response: ", response)
    const html = await response.text()
    console.log("html: ", html)

    location.innerHTML = html;
  } catch{
    console.log(`addContent failed at ${file}.`)
  }
}
// called functions
eventListener(burger, burgerMenu);
addContent(head, headFile);
