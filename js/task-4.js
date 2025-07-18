const userForm = document.querySelector(".login-form");

userForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  
  if (email === "" || password === "") {
      alert("All form fields must be filled in");
      return;
  }
  const userData = {
    email,
    password,
  };

  console.log(userData); 
  form.reset();
}
  
