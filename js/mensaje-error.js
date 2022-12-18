var inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener('invalid', function(e) {
    e.target.setCustomValidity("Todos los campos deben estar completos para poder mandar el mensaje")
  })

  input.addEventListener('input', function(e) {
    e.target.setCustomValidity("");
  })
})