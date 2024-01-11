
document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('form');

	form.addEventListener('submit', function(event) {
	  event.preventDefault(); // Evitar recarga de la página

	  const formData = new FormData(form);
	  fetch('./servidor.php', {
		method: 'POST',
		body: formData
	  })
	  .then(response => response.text())
	  .then(() => {
		document.getElementById('resultado').className = "alert alert-success alert-dismissible fade show";
		document.getElementById('mensaje').textContent = "Comida agregada correctamente";
	  })
	  .catch(error => {
		document.getElementById('resultado').className = "alert alert-danger alert-dismissible fade show";
		document.getElementById('mensaje').textContent = "Error al agregar comida";
	});   
	});
  });