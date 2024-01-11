/* PRIMERA VENTANA EMERGENTE: Calcular el coseno */
let x;

    function Coseno() {
        x = window.open('', 'nueva', 'menubar=yes,resizable=yes,width=500,height=500');
        x.document.write('<html><head><title>Realiza el coseno</title></head><body>');
        x.document.write('<p>Introduce un valor y te diremos cuál es su coseno: </p>');
        x.document.write('<input type="number" id="cos" name="cos" autocomplete="off" required><br>');
        x.document.write('<button onclick="calcularCoseno();">Calcular Coseno</button>');
        x.document.write('<script>function calcularCoseno() { var num = document.getElementById("cos").value; var res = Math.cos(num); document.write("El coseno de el valor que el usuario a introducido es: " + res);}</script>');
        x.document.write('</body></html>');
        x.document.close();}

/* SEGUNDA VENTANA EMERGENTE: Seis números */
let y;

    function Numeros() {
        y = window.open('', 'nueva', 'menubar=yes,resizable=yes,width=500,height=500');
        y.document.write('<!DOCTYPE html><head><title>Seis Números</title></head><body>');
        y.document.write('<p>Escribe seis números y te indicaremos cuál es el mayor, menor y la media</p>');
        y.document.write('<button onclick="num();">Calcular</button>');
        y.document.write(`
        <script>
            function num() {
                alert("Introduce aquí los seis números");
                var n1 = parseInt(prompt("Primer número:"));
                var n2 = parseInt(prompt("Segundo número:"));
                var n3 = parseInt(prompt("Tercero número:"));
                var n4 = parseInt(prompt("Cuarto número:"));
                var n5 = parseInt(prompt("Quinto número:"));
                var n6 = parseInt(prompt("Sexto número:"));
                let notas = [n1, n2, n3, n4, n5, n6];
                for (let i = 0; i < notas.length; i++) {
                    var min = notas[0];
                    var max = 10;
                    if (notas[i] < min) {
                        min = notas[i];
                    }
                    if (notas[i] <= 10) {
                        max = notas[i];
                    }
                }
                document.write("El número introducidon más bajo es un " + min + " y el más alto un " + max);
                var med = (n1 + n2 + n3 + n4 + n5 + n6) / 6;
                document.write("<br>La media de los seis números es: " + med);
            }
            </script>`);
        y.document.write('</body></html>');
        y.document.close();}

/* TERCERA VENTANA EMERGENTE: Piedra, paèl y tijera */
let z;

    function Juego() {
        z = window.open('', 'nueva', 'menubar=yes,resizable=yes,width=500,height=500');
        z.document.write('<html><head><title>Piedra, papel y tijera</title></head><body>');
        z.document.write('<h3 style="text-align: center;"><strong>Piedra, papel o tijera</strong></h3>');
        z.document.write('<p class="instruciones" id="instruciones" style="text-align: center;">El primero en llegar a 5 puntos gana.</p>');
        z.document.write('<div class="marcador"> <p class="nombre nombre-jugador" style="text-align: left;">Jugador</p> <p class="puntos" style="text-align: center;"> <span id="puntos-jugador">0</span> <span>-</span> <span id="puntos-ordenador">0</span> <p class="nombre nombre-ordenador" style="text-align: right;">Ordenador</p>  </p> </div>');
        z.document.write('<div class="elige-tu-arma" id="elige-tu-arma" style="text-align: center;"> <h4>Elige tu arma para el siguente turno</h4> <div class="armas"> <button class="arma" id="Piedra🪨">🪨</button> <button class="arma" id="Papel📋">📋</button> <button class="arma" id="Tijera✂️">✂️</button> </div> </div>');
        z.document.write('<div class="mensaje disabled" id="mensaje"> <p> Has usado <span class="eleccion" id="eleccion-jugador">Papel📋</span><br> y el ordenador a usado <span class="eleccion" id="eleccion-ordenador">Piedra🪨</span> </p> <p id="gana-punto">Ganaste un punto🔥</p> </div>');
        z.document.write('<button class="btn disabled" id="reiniciar">Reiniciar juego</button>');
        z.document.write('<script>let puntosJugador = 0; let puntosOrdenador = 0;let instrucciones = document.querySelector("#instruciones"); let contenedorPuntosJugador = document.querySelector("#puntos-jugador");let contenedorPuntosOrdenador = document.querySelector("#puntos-ordenador");let mensaje = document.querySelector("#mensaje");let contenedorGanaPunto = document.querySelector("#gana-punto");let eligeTuArma = document.querySelector("#elige-tu-arma"); let contenedorEleccionJugador = document.querySelector("#eleccion-jugador");let contenedorEleccionOrdenador = document.querySelector("#eleccion-ordenador"); let botonesArmas = document.querySelectorAll(".arma"); botonesArmas.forEach(boton => { boton.addEventListener("click", iniciarTurno); }); function iniciarTurno(e){ let eleccionOrdenador = Math.random(); let eleccionJugador = e.currentTarget.id; console.log(eleccionJugador); switch(eleccionJugador) { case "Piedra🪨": if (eleccionOrdenador < 0.34) { eleccionOrdenador = "Piedra🪨";} case "Papel📋": if (eleccionOrdenador <= 0.67) { eleccionOrdenador = "Papel📋";} case "Tijera✂️": if (eleccionOrdenador < 1) { eleccionOrdenador = "Tijera✂️";}} if( (eleccionJugador === "Piedra🪨" && eleccionOrdenador === "Tijera✂️") || (eleccionJugador === "Tijera✂️" && eleccionOrdenador === "Papel📋") || (eleccionJugador === "Papel📋" && eleccionOrdenador === "Piedra🪨")){ ganaJugador(); } else if( (eleccionOrdenador === "Piedra🪨" && eleccionJugador === "Tijera✂️") || (eleccionOrdenador === "Tijera✂️" && eleccionJugador === "Papel📋") || (eleccionOrdenador === "Papel📋" && eleccionJugador === "Piedra🪨")){ ganaOrdenador(); } else { empate();} mensaje.classList.remove("disabled"); contenedorEleccionJugador.innerText = eleccionJugador; contenedorEleccionOrdenador.innerText = eleccionOrdenador; if(puntosJugador === 5 || puntosOrdenador === 5){ if(puntosJugador ===5){ instrucciones.innerText = "🔥 ¡Ganaste el juego! 🔥"} if(puntosOrdenador === 5){ instrucciones.innerText = "😭 ¡El ordenador gano el juego! 😭"} eligeTuArma.classList.add("disabled"); reiniciar.classList.remove("disabled"); reiniciar.addEventListener("click", reiniciarJuego); } } function ganaJugador(){ puntosJugador++; contenedorPuntosJugador.innerText = puntosJugador; contenedorGanaPunto.innerText = "¡Ganaste un punto! 🔥"} function ganaOrdenador(){ puntosOrdenador++; contenedorPuntosOrdenador.innerText = puntosOrdenador; contenedorGanaPunto.innerText = "¡El ordenador gano un punto! 😭"} </script>');
        z.document.write('</body></html>');
        z.document.close();}