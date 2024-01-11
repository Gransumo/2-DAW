
function	calcularCaracteres(nombre){
	return (nombre.length);
}

function	strFirstChar(str, c)
{
	var i = 0;

	str = str.toUpperCase();
	while (str[i] && str[i] != c)
		i++;
	if (str[i] != c)
		throw new FormError("No se ha encontrado la letra " + c + " en el nombre");
	return (i + 1);
}

function	strLastChar(str, c)
{
	var i = str.length - 1;

	str = str.toUpperCase();
	while (str[i] && str[i] != c)
		i--;
	if (str[i] != c)
		throw new FormError("No se ha encontrado la letra " + c + " en el nombre");
	return (i + 1);
}

function subStr(str, start) {
	var i = start;
	var subStr = "";
	while (str[i]) {
		subStr += str[i];
		i++;
	}
	return (subStr);
}

function toUpperCase(str) {
	return (str.toUpperCase());
}

function calcularEdad(fechaNacimiento) {
	var fechaActual = new Date();
	var edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
	var mes = fechaActual.getMonth() - fechaNacimiento.getMonth();
	if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
		edad--;
	}
	return (edad);
}

function getMonth(date) {
	const month = date.toLocaleString('default', { month: 'long' });
	return month;
}

function getYear(Date) {
	return (Date.getFullYear());
}

function calcularCoseno(n) {
	return (Math.cos(n));
}

function getBigger(n) {
	var bigger = 0;
	for (let i = 0; i < n.length; i++) {
		if (n[i] > bigger)
			bigger = n[i];
	}
	return (bigger);
}

function randomNum() {
	return (Math.floor(Math.random() * 10));
}

function create_node(type, content) {
	if (!type || !content)
		return (null);
	var node = document.createElement(type);
	if (typeof content === "string"){
		var text = document.createTextNode(content);
		node.appendChild(text);
		return(node);
	} else if (content instanceof Node){
		node.appendChild(content);
		return (node);
	}
	return (null);
}

function append_nodes(type, nodes) {
	if (!Array.isArray(nodes))
		return (null);
	var node = document.createElement(type);
	for (let i = 0; i < nodes.length; i++) {
		if (!(nodes[i] instanceof Node))
			return (null);
		node.appendChild(nodes[i]);
	}
	return (node);
}
