var variableA;
var variableB;
var operacion;
var finalizado;

function init(){
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
	var decimal = document.getElementById("decimal");
	var suma  = document.getElementById("suma");
	var resta = document.getElementById("resta");
	var divid  = document.getElementById("divid");
	var multi  = document.getElementById("multi");
	var igual = document.getElementById("igual");
	var reset  = document.getElementById("reset");
	operacion = ""

	uno.onclick = function(e){
		if(finalizado){
			limpiar();
		}
		resultado.textContent = resultado.textContent + "1"
	}
	dos.onclick = function(e){
		if(finalizado){
			limpiar();
		}
		resultado.textContent = resultado.textContent + "2"
	}
	tres.onclick = function(e){
		if(finalizado){
			limpiar();
		}
		resultado.textContent = resultado.textContent + "3"
	}
	cuatro.onclick = function(e){
		if(finalizado){
			limpiar();
		}
		resultado.textContent = resultado.textContent + "4"
	}
	cinco.onclick = function(e){
		if(finalizado){
			limpiar();
		}
		resultado.textContent = resultado.textContent + "5"
	}
	seis.onclick = function(e){
		if(finalizado){
			limpiar();
		}
		resultado.textContent = resultado.textContent + "6"
	}
	siete.onclick = function(e){
		if(finalizado){
			limpiar();
		}
		resultado.textContent = resultado.textContent + "7"
	}
	ocho.onclick = function(e){
		if(finalizado){
			limpiar();
		}
		resultado.textContent = resultado.textContent + "8"
	}
	nueve.onclick = function(e){
		if(finalizado){
			limpiar();
		}
		resultado.textContent = resultado.textContent + "9"
	}
	cero.onclick = function(e){
		if(finalizado){
			limpiar();
		}
		resultado.textContent = resultado.textContent + "0"
	}
	decimal.onclick = function(e){
		if(finalizado){
			limpiar();
		}
		resultado.textContent = resultado.textContent + "."
	}
	reset.onclick = function(e){
		resetear();
	}
	suma.onclick = function(e){
		if(operacion!=""){
		  operacion = "+";
		} else {
		  variableA = resultado.textContent;
		  operacion = "+";
		  limpiar();
		}
	}
	resta.onclick = function(e){
		if(operacion!=""){
			operacion = "-";
		} else{
			variableA = resultado.textContent;
			operacion = "-";
			limpiar();
		}
	}
	divid.onclick = function(e){
		if(operacion!=""){
			operacion = "/";
		} else{
			variableA = resultado.textContent;
			operacion = "/";
			limpiar();
		}
	}
	multi.onclick = function(e){
		if(operacion!=""){
			operacion = "*";
		} else{
			variableA = resultado.textContent;
			operacion = "*";
			limpiar();
		}
	}
	igual.onclick = function(e){
		//alert("ok");
		variableB = resultado.textContent;
		
		resolver();
	}

	function limpiar(){
		resultado.textContent = ""
		finalizado = false;
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
	      if(variableB==0){
	      	res = "Infinity"
	      	break;
	      }
	      res = parseFloat(variableA) / parseFloat(variableB);
	      break;
	  }
	  resetear();
	  resultado.textContent = res;
	  finalizado = true;
	}

}