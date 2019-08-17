function init(){
	var start_button = document.getElementById("start-button");
	var box_a = document.getElementById("box-a");
	var box_b = document.getElementById("box-b");
	var box_c = document.getElementById("box-c");
	var box_d = document.getElementById("box-d");
	var box_e = document.getElementById("box-e");
	var box_f = document.getElementById("box-f");
	var box_g = document.getElementById("box-g");
	var box_h = document.getElementById("box-h");
	var box_i = document.getElementById("box-i");
	var grid = [];
	var grid = [[],[],[]];
	var grid = [[box_a, box_b, box_c],[box_d, box_e, box_f],[box_g, box_h, box_i]];
	/*Boton start*/
	start_button.onclick = function(e){
		comenzar();
		pintar();
	}
	function comenzar(){
		var orden_piezas = [];
		var orden_piezas = ["1","2","3","4","5","6","7","8","X"];
		rellenar(orden_piezas);
	}
	function rellenar(datos){
		grid[0][0].textContent = datos[0];
		grid[0][1].textContent = datos[1];
		grid[0][2].textContent = datos[2];
		grid[1][0].textContent = datos[3];
		grid[1][1].textContent = datos[4];
		grid[1][2].textContent = datos[5];
		grid[2][0].textContent = datos[6];
		grid[2][1].textContent = datos[7];
		grid[2][2].textContent = datos[8];
	}
	/*cajas*/
	grid[0][0].onclick = function(e){
		mover(0,0);
	}
	grid[0][1].onclick = function(e){
		mover(0,1);
	}
	grid[0][2].onclick = function(e){
		mover(0,2);
	}
	grid[1][0].onclick = function(e){
		mover(1,0);
	}
	grid[1][1].onclick = function(e){
		mover(1,1);
	}
	grid[1][2].onclick = function(e){
		mover(1,2);
	}
	grid[2][0].onclick = function(e){
		mover(2,0);
	}
	grid[2][1].onclick = function(e){
		mover(2,1);
	}
	grid[2][2].onclick = function(e){
		mover(2,2);
	}

	function mover(posx,posy){	 	
		check_and_move(posx,posy);
		pintar();
	}

	function check_and_move(posx, posy){
		if(grid[posx][posy].textContent != "X"){
			if(posy!=2){
				if(grid[posx][posy+1].textContent == "X"){
					temporal = grid[posx][posy].textContent;
					grid[posx][posy].textContent = grid[posx][posy+1].textContent;
					grid[posx][posy+1].textContent = temporal;
				}
			}
			if(posy!=0){
				if(grid[posx][posy-1].textContent == "X"){
					temporal = grid[posx][posy].textContent;
					grid[posx][posy].textContent = grid[posx][posy-1].textContent;
					grid[posx][posy-1].textContent = temporal;
				}
			}
			if(posx!=2){
				if(grid[posx+1][posy].textContent == "X"){
					temporal = grid[posx][posy].textContent;
					grid[posx][posy].textContent = grid[posx+1][posy].textContent;
					grid[posx+1][posy].textContent = temporal;
				}
			}
			if (posx!=0) {
				if(grid[posx-1][posy].textContent == "X"){
					temporal = grid[posx][posy].textContent;
					grid[posx][posy].textContent = grid[posx-1][posy].textContent;
					grid[posx-1][posy].textContent = temporal;
				}		
			}			
		}
		else{}
	}

	function pintar(datos){
		if(grid[0][0].textContent == "X"){
			grid[0][0].classList.add("empty-box");
		}
		else{
			grid[0][0].classList.remove("empty-box");
		}
		if(grid[0][1].textContent == "X"){
			grid[0][1].classList.add("empty-box");
		}
		else{
			grid[0][1].classList.remove("empty-box");
		}
		if(grid[0][2].textContent == "X"){
			grid[0][2].classList.add("empty-box");
		}
		else{
			grid[0][2].classList.remove("empty-box");
		}
		if(grid[1][0].textContent == "X"){
			grid[1][0].classList.add("empty-box");
		}
		else{
			grid[1][0].classList.remove("empty-box");
		}
		if(grid[1][1].textContent == "X"){
			grid[1][1].classList.add("empty-box");
		}
		else{
			grid[1][1].classList.remove("empty-box");
		}
		if(grid[1][2].textContent == "X"){
			grid[1][2].classList.add("empty-box");
		}
		else{
			grid[1][2].classList.remove("empty-box");
		}
		if(grid[2][0].textContent == "X"){
			grid[2][0].classList.add("empty-box");
		}
		else{
			grid[2][0].classList.remove("empty-box");
		}
		if(grid[2][1].textContent == "X"){
			grid[2][1].classList.add("empty-box");
		}
		else{
			grid[2][1].classList.remove("empty-box");
		}
		if(grid[2][2].textContent == "X"){
			grid[2][2].classList.add("empty-box");
		}
		else{
			grid[2][2].classList.remove("empty-box");
		}		
	}
}