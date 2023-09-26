function miFuncion() {
    var select = document.getElementById("operacion");
    var seleccionada = select.options[select.selectedIndex].text;
    console.log("selected-option" + seleccionada);
}