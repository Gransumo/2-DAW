
function getCookie(name) {
	if (document.cookie.indexOf(name + "=") == -1)
		return (-1);
	var cookies = document.cookie.valueOf(name).split(";");
	for (var i = 0; i < cookies.length; i++) {
		if(cookies[i].slice(0, name.length + 2).trim(' ').localeCompare(name + "=") === 0)
		{
			var userCookie = cookies[i].slice(name.length + 2);
			return (userCookie);
		}
	}
}

function init_autentication() {
	var content = document.getElementById("seccion");

	if (document.cookie.indexOf("user=") !== -1) 
		content.innerHTML = `
			<form action="../code/autenticacion_code.php" method="post">
			<div class="content">
				<p>Hola ` + getCookie("user") + `, has iniciado sesion</p>
			</div>
			<div class="buttom">
				<input type="submit" value="Cerrar Sesion" id="SUBMIT_BUTTOM" name="cerrar_sesion">
			</div>
			</form>
		`;
	else {
		content.innerHTML = `
		<form action="../code/autenticacion_code.php" method="post">
			<div class="inputs">
				<div class="text_inputs">
					<input type="text" class="input_txt" name="user" placeholder="Usuario *" required>
					<input type="password" class="input_txt" name="password" placeholder="Contraseña *" required>
				</div>
				<div class="checkbox_inputs">
					<input type="checkbox" id="guardar" name="guardar" class="check_input">
					<div class="label">
						<label for="guardar">Guardar Usuario</label>
					</div>
				</div>
			</div>
			<div class="buttom">
				<input type="submit" value="Iniciar Sesion" name="Cambiar color" id="SUBMIT_BUTTOM">
			</div>
		</form>
		`;
	}
}

document.addEventListener("DOMContentLoaded", init_autentication());
