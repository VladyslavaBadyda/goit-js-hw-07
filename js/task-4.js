form.addEventListener('submit', function(event) {
    event.preventDefault();

    const elements = form.elements;

    const emailValue = elements.email.value.trim();
    const passwordValue = elements.password.value.trim();

    if (emailValue === '' || passwordValue === '') {
      alert('All form fields must be filled in');
      return;
    }

    const formData = {
      email: emailValue,
      password: passwordValue
    };

    console.log(formData);

    form.reset();
  });