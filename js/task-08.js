const formRef = document.querySelector('form.login-form')

formRef.addEventListener('submit', onFormSubmit);



function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value; 
  const formData = { email, password };
  if (email && password) {
    console.log(formData)
      } else {
      alert('Please complete all fields')
  }
  }