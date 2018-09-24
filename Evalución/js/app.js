var operandoa;
var operandob;
var operacion;
var resu;



function init() {

  //variables
    var resultado = document.getElementById("display");
    var on = document.getElementById('on');
    var signo = document.getElementById('sign');
    var raiz = document.getElementById('raiz');
    var dividido = document.getElementById('dividido');
    var siete = document.getElementById('7');
    var ocho = document.getElementById('8');
    var nueve = document.getElementById('9');
    var multiplicacion = document.getElementById('por');
    var cuatro = document.getElementById('4');
    var cinco = document.getElementById('5');
    var seis = document.getElementById('6');
    var resta = document.getElementById('menos');
    var uno = document.getElementById('1');
    var dos = document.getElementById('2');
    var tres = document.getElementById('3');
    var cero = document.getElementById('0');
    var punto = document.getElementById('punto');
    var igual = document.getElementById('igual');
    var suma = document.getElementById('mas');

    //Funciones



    function mouseDown() {
    document.getElementById('1').innerHTML = "width:50%";
    }

    function mouseUp() {
        document.getElementById('1').innerHTML = "width:50%";
    }

    function limpiar(){
      resultado.textContent = "";
    }

    function resetear() {
      resultado.textContent = 0;
      operandoa = 0;
      operandob = 0;
      operacion = "";
    }

    function resolver() {
      var res = 0;
      switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
          break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
          break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
          break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
          break;
        default:
      }
      resetear();
      resultado.textContent = res;
    }

  //eventos
    signo.onclick = function(e){
      signo.addEventListener("mousedown", function(){
        signo.setAttribute("style","transform:scale(0.95,0.95)")
      })
      signo.addEventListener("mouseup", function(){
        signo.setAttribute("style","transform:scale(1,1)")
      })
      if (resultado.textContent == "0") {
        resultado.textContent = "0";
      }else if (Math.sign(resultado.textContent) == "-1") {
        resultado.textContent = "";
      }else if (resultado.textContent == "") {
        resultado.textContent = "";
      }else {
        resultado.textContent = "-" + resultado.textContent;
      }


    }
    punto.onclick = function(e){
      resultado.textContent = resultado.textContent + ".";
      punto.addEventListener("mousedown", function(){
        punto.setAttribute("style","transform:scale(0.95,0.95)")
      })
      punto.addEventListener("mouseup", function(){
        punto.setAttribute("style","transform:scale(1,1)")
      })
    }
    uno.onclick = function(e){
      if (resultado.textContent == "0") {
        resultado.textContent = "";
      }
      resultado.textContent = resultado.textContent + "1";
      uno.addEventListener("mousedown", function(){
        uno.setAttribute("style","transform:scale(0.95,0.95)")
      })
      uno.addEventListener("mouseup", function(){
        uno.setAttribute("style","transform:scale(1,1)")
      })
    }
    dos.onclick = function(e){
      if (resultado.textContent == "0") {
        resultado.textContent = "";
      }
      resultado.textContent = resultado.textContent + "2";
      dos.addEventListener("mousedown", function(){
        dos.setAttribute("style","transform:scale(0.95,0.95)")
      })
      dos.addEventListener("mouseup", function(){
        dos.setAttribute("style","transform:scale(1,1)")
      })
    }
    tres.onclick = function(e){
      if (resultado.textContent == "0") {
        resultado.textContent = "";
      }
      resultado.textContent = resultado.textContent + "3";
      tres.addEventListener("mousedown", function(){
        tres.setAttribute("style","transform:scale(0.95,0.95)")
      })
      tres.addEventListener("mouseup", function(){
        tres.setAttribute("style","transform:scale(1,1)")
      })
    }
    cuatro.onclick = function(e){
      if (resultado.textContent == "0") {
        resultado.textContent = "";
      }
      resultado.textContent = resultado.textContent + "4";
      cuatro.addEventListener("mousedown", function(){
        cuatro.setAttribute("style","transform:scale(0.95,0.95)")
      })
      cuatro.addEventListener("mouseup", function(){
        cuatro.setAttribute("style","transform:scale(1,1)")
      })
    }
    cinco.onclick = function(e){
      if (resultado.textContent == "0") {
        resultado.textContent = "";
      }
      resultado.textContent = resultado.textContent + "5";
      cinco.addEventListener("mousedown", function(){
        cinco.setAttribute("style","transform:scale(0.95,0.95)")
      })
      cinco.addEventListener("mouseup", function(){
        cinco.setAttribute("style","transform:scale(1,1)")
      })
    }
    seis.onclick = function(e){
      if (resultado.textContent == "0") {
        resultado.textContent = "";
      }
      resultado.textContent = resultado.textContent + "6";
      seis.addEventListener("mousedown", function(){
        seis.setAttribute("style","transform:scale(0.95,0.95)")
      })
      seis.addEventListener("mouseup", function(){
        seis.setAttribute("style","transform:scale(1,1)")
      })
    }
    siete.onclick = function(e){
      if (resultado.textContent == "0") {
        resultado.textContent = "";
      }
      resultado.textContent = resultado.textContent + "7";
      siete.addEventListener("mousedown", function(){
        siete.setAttribute("style","transform:scale(0.95,0.95)")
      })
      siete.addEventListener("mouseup", function(){
        siete.setAttribute("style","transform:scale(1,1)")
      })
    }
    ocho.onclick = function(e){
      if (resultado.textContent == "0") {
        resultado.textContent = "";
      }
      resultado.textContent = resultado.textContent + "8";
      ocho.addEventListener("mousedown", function(){
        ocho.setAttribute("style","transform:scale(0.95,0.95)")
      })
      ocho.addEventListener("mouseup", function(){
        ocho.setAttribute("style","transform:scale(1,1)")
      })
    }
    nueve.onclick = function(e){
      if (resultado.textContent == "0") {
        resultado.textContent = "";
      }
      resultado.textContent = resultado.textContent + "9";
      nueve.addEventListener("mousedown", function(){
        nueve.setAttribute("style","transform:scale(0.95,0.95)")
      })
      nueve.addEventListener("mouseup", function(){
        nueve.setAttribute("style","transform:scale(1,1)")
      })
    }
    cero.onclick = function(e){
      if (resultado.textContent == "0") {
        resultado.textContent = "";
      }
      resultado.textContent = resultado.textContent + "0";
      cero.addEventListener("mousedown", function(){
        cero.setAttribute("style","transform:scale(0.95,0.95)")
      })
      cero.addEventListener("mouseup", function(){
        cero.setAttribute("style","transform:scale(1,1)")
      })
    }

    on.onclick = function(e){
      on.addEventListener("mousedown", function(){
        on.setAttribute("style","transform:scale(0.95,0.95)")
      })
      on.addEventListener("mouseup", function(){
        on.setAttribute("style","transform:scale(1,1)")
      })
      resetear();
    }

    suma.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "+";
      limpiar();
      suma.addEventListener("mousedown", function(){
        suma.setAttribute("style","transform:scale(0.95,0.95)")
      })
      suma.addEventListener("mouseup", function(){
        suma.setAttribute("style","transform:scale(1,1)")
      })
    }
    resta.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "-";
      limpiar();
      resta.addEventListener("mousedown", function(){
        resta.setAttribute("style","transform:scale(0.95,0.95)")
      })
      resta.addEventListener("mouseup", function(){
        resta.setAttribute("style","transform:scale(1,1)")
      })
    }
    multiplicacion.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "*";
      limpiar();
      multiplicacion.addEventListener("mousedown", function(){
        multiplicacion.setAttribute("style","transform:scale(0.95,0.95)")
      })
      multiplicacion.addEventListener("mouseup", function(){
        multiplicacion.setAttribute("style","transform:scale(1,1)")
      })
    }
    dividido.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "/";
      limpiar();
      dividido.addEventListener("mousedown", function(){
        dividido.setAttribute("style","transform:scale(0.95,0.95)")
      })
      dividido.addEventListener("mouseup", function(){
        dividido.setAttribute("style","transform:scale(1,1)")
      })
    }
    igual.onclick = function(e){
      operandob = resultado.textContent;
      resolver();
      igual.addEventListener("mousedown", function(){
        igual.setAttribute("style","transform:scale(0.95,0.95)")
      })
      igual.addEventListener("mouseup", function(){
        igual.setAttribute("style","transform:scale(1,1)")
      })
    }

}
