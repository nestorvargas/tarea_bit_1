//javascript

$(document).ready(function() {
  $("#contactForm").validate();
});


/*simple form validation script*/
var formData = document.forms.contactForm;
var show = document.getElementById("alert");

formData.onsubmit = function() {

  if (formData.name.value == "") {
     alert('Formulario incompleto');
    return false;
  } else {
    alert('Formulario enviado correctamente');
    return true;
  }
};