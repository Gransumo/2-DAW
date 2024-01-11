
function validarNombre(nombre) {
	if (nombre.length == 0) {
		throw new FormError("El nombre no puede estar vacío");
	}
	
	if (nombre.length > 50) {
		throw new FormError("El nombre no puede tener más de 50 caracteres");
	}

	if (nombre.length < 3) {
		throw new FormError("El nombre debe tener al menos 3 caracteres");
	}
}

function validarFecha(fechaIngresada) {
	var fechaActual = new Date();
	if (fechaIngresada > fechaActual) {
		throw new FormError("La fecha no puede ser posterior a la actual");
	}
}

function validarDatos() {
	
	var	nombre = document.getElementById("name").value.trim();
	var fechaIngresada = new Date(parseInt(document.getElementById("year").value),
						parseInt(document.getElementById("month").value) - 1,
						parseInt(document.getElementById("day").value));
	try {
		validarNombre(nombre);
		validarFecha(fechaIngresada);
	} catch (correcciónErr) {
		if (correcciónErr instanceof FormError)
			throw correcciónErr;
	}
}

function	insertNotification()
{
	var notification_div = document.getElementById("notification_div");
	notification_div.innerHTML = '\
	<div class="d-none" rule="alert" id="notification">\
	<span id="notificationText"></span>\
	<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>\
	</div>';
}

function desplegarResultado()
{
	var	nombre = document.getElementById("name").value;
	var fechaIngresada = new Date(parseInt(document.getElementById("year").value),
						parseInt(document.getElementById("month").value) - 1,
						parseInt(document.getElementById("day").value));
	var resultado_div = document.getElementById("resultado_div");
	var ul = document.createElement("ul");
	ul.className = "list-unstyled";
	resultado_div.appendChild(ul);
	try {
		ul.appendChild(create_node("li", "Tu nombre tiene " + calcularCaracteres(nombre) + " caracteres, incluidos espacios."));
		ul.appendChild(create_node("li", "La primera letra A de tu nombre está en la posición: " + strFirstChar(nombre, "A")));
		ul.appendChild(create_node("li", "La última letra A de tu nombre está en la posición: " + strLastChar(nombre, "A")));
		ul.appendChild(create_node("li", "Tu nombre menos las 3 primeras letras es: " + subStr(nombre, 3)));
		ul.appendChild(create_node("li", "Tu nombre todo en mayúsculas es: " + toUpperCase(nombre)));
		ul.appendChild(create_node("li", "Tu edad es: " + calcularEdad(fechaIngresada)));
		resultado_div.parentElement.className = "card border border-black align-items-center text-left mt-2";
	} catch (error) {
		if (error instanceof FormError)
			throw error;
	}
}

function delete_content(div_name) {
	var div = document.getElementById(div_name);
	while (div.firstChild) {
		div.removeChild(div.firstChild);
	}
}

function openPopup() {
	window.open('popup.html', 'MiPopup', 'width=700,height=700');
}

document.addEventListener("DOMContentLoaded", () => {
	const	form = document.getElementById("form");
	var		is_finished = false;
	form.addEventListener("submit", function(event) {
		event.preventDefault();
		insertNotification();
		var notification = document.getElementById("notification");
		var notificationText = document.getElementById("notificationText");
		if (is_finished)
			delete_content("resultado_div");
		try {
			validarDatos();
			desplegarResultado(resultado_div);
			notification.className = "alert alert-success alert-dismissible fade show";
			notificationText.innerHTML = "Formulario enviado correctamente";
			is_finished = true;
		} catch (error) {
			if (error instanceof FormError) {
				notification.className = "alert alert-warning alert-dismissible fade show";
				notificationText.innerHTML = error.message;
			}
		}
	});
});
