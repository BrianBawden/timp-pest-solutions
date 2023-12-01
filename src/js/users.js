import { sqlSelectAll, sqlInsert } from "./sql.mjs";


const regBtn = document.querySelector("#regBtn");

regBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let newUser = getRegisterInfo();

  if (newUser){
    // console.log(newUser)
    registration(newUser)
  }else{
    alert("Registration failed!")
  }
  
  })

function getRegisterInfo(){
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

  const user = []
  
  user.push(get_fname)
  user.push(get_lname)
  user.push(get_phone)
  user.push(get_email)
  user.push(get_streetadr)
  user.push(get_city)
  user.push(get_st)
  user.push(get_zip)
  user.push(get_pw)
  // user.push(get_pwConfirm)
  
  return user
}

export function registration(user){

  // let userInsert = sqlInsert(user[0], user[1], user[2], user[3], user[4], user[5], user[6], user[7], user[8])
  
  console.log("success register: ", user[0])
  // console.log(userInsert)
  // console.log(sqlInsert(user[0], user[1], user[2], user[3], user[4], user[5], user[6], user[7], user[8]));
}
