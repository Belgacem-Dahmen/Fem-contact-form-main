

document.addEventListener('DOMContentLoaded', function () {
  
  const showSuccessMessage = () => {

    // JavaScript pour déclencher l'affichage du message de validation

    const validationMessage = document.querySelector('.validation-message');

    // Afficher le message de validation
    validationMessage.classList.add('show');

    // Masquer le message de validation après un certain délai (par exemple, 5 secondes)
    setTimeout(function () {
      validationMessage.classList.add('hidden');

    }, 5000); // 5000 millisecondes = 5 secondes

    localStorage.removeItem('success');

  }

if (localStorage.getItem('success')) {
  showSuccessMessage();
}

  const form = document.getElementById('contact_form');


  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Validate each field
    let isValid = true;

    if (form.first_name.value === '') {
      document.getElementById('first_name_error').style.display = 'inline';
      isValid = false;
    } else {
      document.getElementById('first_name_error').style.display = 'none';
    }

    if (form.last_name.value === '') {
      document.getElementById('last_name_error').style.display = 'inline';
      isValid = false;
    } else {
      document.getElementById('last_name_error').style.display = 'none';
    }

    if (form.email.value === '') {
      document.getElementById('email_error').style.display = 'inline';
      isValid = false;
    } else {
      document.getElementById('email_error').style.display = 'none';
    }

    if (form.query_type.value === '') {
      document.getElementById('query_type_error').style.display = 'inline';
      isValid = false;
    } else {
      document.getElementById('query_type_error').style.display = 'none';
    }

    if (form.message.value === '') {
      document.getElementById('message_error').style.display = 'inline';
      isValid = false;
    } else {
      document.getElementById('message_error').style.display = 'none';
    }

    if (!form.consent.checked) {
      document.getElementById('consent_error').style.display = 'inline';
      isValid = false;
    } else {
      document.getElementById('consent_error').style.display = 'none';
      isValid = true;
    }


    if (isValid) {
      const formData = {
        first_name: form.first_name.value,
        last_name: form.last_name.value,
        email: form.email.value,
        query_type: form.query_type.value,
        message: form.message.value,
        consent: form.consent.checked
      };
      localStorage.setItem('success', true);
      form.submit();







    }

  });




});





