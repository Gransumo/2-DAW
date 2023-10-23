
function cambiarColor(){
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);

	let color = `rgb(${r}, ${g}, ${b})`;
	document.getElementById("toChange").style.backgroundColor = color;
}

document.addEventListener("DOMContentLoaded", ()=>{
	var init = document.getElementById("init");

	init.addEventListener("click", ()=> {
		var setInterval(cambiarColor(), 1000);
	});
});
