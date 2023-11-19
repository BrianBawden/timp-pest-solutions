
const head = document.querySelector("#head");
const headFile = "/src/partials/head.html";
const header = document.querySelector("#header");
const headerFile = "/src/partials/header.html";
const footer = document.querySelector("#footer");
const footerFile = "/src/partials/footer.html";

// showHideBurger will add or remove the class hide/show to display the dropdown menu in mobile view.
function showHideBurger() {
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

// getBgrBtn listens for a click on the burger button for the drop down menu. 
function getBgrBtn() {
  setTimeout(() => {
    const burger = document.querySelector(".bg-bars") // burger is the hamburger button for the mobile view drop down
    burger.addEventListener("click", showHideBurger);
  }, 500);
}

// gets and sets html for consistent layout of pages. location is the querySelector and file is the path to the content being added.
async function addHtmlContent(location, file) {
  try{
    //get html content
    const response = await fetch(file)
    const html = await response.text()

    location.innerHTML += html;
  } catch{
    console.log(`addContent failed at ${file}.`)
  }
}
// called functions
addHtmlContent(head, headFile);
addHtmlContent(header, headerFile);
addHtmlContent(footer, footerFile);
getBgrBtn();

