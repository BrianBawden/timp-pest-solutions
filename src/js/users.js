
const regBtn = document.querySelector("#regBtn");

regBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const get_fname = document.querySelector("#fname").value
  const get_lname = document.querySelector("#lname").value
  const get_phone = document.querySelector("#phone").value
  const get_email = document.querySelector("#email").value
  const get_streetadr = document.querySelector("#streetadr").value
  const get_city = document.querySelector("#city").value
  const get_st = document.querySelector("#st").value
  const get_zip = document.querySelector("#zip").value
  const get_pw = document.querySelector("#pw").value
  const get_pwConfirm = document.querySelector("#pwConfirm").value

  const user = {}
  
  user.fname = get_fname;
  user.lname = get_lname;
  user.phone = get_phone;
  user.email = get_email;
  user.streetadr = get_streetadr;
  user.city = get_city;
  user.st = get_st;
  user.zip = get_zip;
  user.pw = get_pw;
  user.pwConfirm = get_pwConfirm;
  
  console.log(user)
  })



