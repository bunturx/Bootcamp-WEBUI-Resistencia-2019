var variableA;
var variableB;
var operacion;

function init(){
	//alert("prueba")
	var resultado = document.getElementById("resultado");
	var uno = document.getElementById("uno");
	var dos = document.getElementById("dos");
	var tres = document.getElementById("tres");
	var cuatro = document.getElementById("cuatro");
	var cinco = document.getElementById("cinco");
	var seis = document.getElementById("seis");
	var siete  = document.getElementById("siete");
	var ocho = document.getElementById("ocho");
	var nueve  = document.getElementById("nueve");
	var cero = document.getElementById("cero");
	var suma  = document.getElementById("suma");
	var resta = document.getElementById("resta");
	var divid  = document.getElementById("divid");
	var multi  = document.getElementById("multi");
	var igual = document.getElementById("igual");
	var reset  = document.getElementById("reset");

	uno.onclick = function(e){
		resultado.textContent = resultado.textContent + "1"
	}
	dos.onclick = function(e){
		resultado.textContent = resultado.textContent + "2"
	}
	tres.onclick = function(e){
		resultado.textContent = resultado.textContent + "3"
	}
	cuatro.onclick = function(e){
		resultado.textContent = resultado.textContent + "4"
	}
	cinco.onclick = function(e){
		resultado.textContent = resultado.textContent + "5"
	}
	seis.onclick = function(e){
		resultado.textContent = resultado.textContent + "6"
	}
	siete.onclick = function(e){
		resultado.textContent = resultado.textContent + "7"
	}
	ocho.onclick = function(e){
		resultado.textContent = resultado.textContent + "8"
	}
	nueve.onclick = function(e){
		resultado.textContent = resultado.textContent + "9"
	}
	cero.onclick = function(e){
		resultado.textContent = resultado.textContent + "0"
	}
	reset.onclick = function(e){
		resetear();
	}
	suma.onclick = function(e){
		variableA = resultado.textContent;
		operacion = "+";
		limpiar();
	}
	resta.onclick = function(e){
		variableA = resultado.textContent;
		operacion = "-";
		limpiar();
	}
	divid.onclick = function(e){
		variableA = resultado.textContent;
		operacion = "/";
		limpiar();
	}
	multi.onclick = function(e){
		variableA = resultado.textContent;
		operacion = "*";
		limpiar();
	}
	igual.onclick = function(e){
		//alert("ok");
		variableB = resultado.textContent;
		
		resolver();
	}



function limpiar(){
	resultado.textContent = ""
}
function resetear(){
	resultado.textContent = ""
	variableA = 0;
	variableB = 0;
	operacion = "";
}


function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(variableA) + parseFloat(variableB);
      break;
    case "-":
        res = parseFloat(variableA) - parseFloat(variableB);
        break;
    case "*":
      res = parseFloat(variableA) * parseFloat(variableB);
      break;
    case "/":
      res = parseFloat(variableA) / parseFloat(variableB);
      break;
  }
  resetear();
  resultado.textContent = res;
}

}