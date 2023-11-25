const form = document.querySelector('#address');

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  let address = {}
  const formData = new FormData(form);
  for (const [key, value] of formData.entries()) {
    address[key] = value;
  }
  console.log(address['userStreet']);
})