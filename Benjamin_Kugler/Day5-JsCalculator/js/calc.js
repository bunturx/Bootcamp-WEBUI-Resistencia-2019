    var operatorA;
    var operatorB;
    var operation = "";
    var clear = 1;
    var com = false;
function init(){
    var result = document.getElementById("result");
    var clear = document.getElementById("clear");
    var changeSign = document.getElementById("changeSign");
    var percentage = document.getElementById("percentage");
    var divide = document.getElementById("divide");
    var times = document.getElementById("times");
    var minus = document.getElementById("minus");
    var plus = document.getElementById("plus");
    var equal = document.getElementById("equal");

    /*EVENTS*/
    const keys = document.querySelector(".calculator");
    if(keys){
        keys.addEventListener("click", function(e){
            if(e.target.matches("button") && isNaN(e.target.textContent) == false){
                isCero();
                clean();
                result.textContent = result.textContent + e.target.textContent;
            }
        });
    }

    //OPERATIONS
    plus.onclick = function(e){
        operatorA = result.textContent;
        operation = "+";
        clear = 0;
        com = false;
    }
    minus.onclick = function(e){
        operatorA = result.textContent;
        operation = "-";
        clear = 0;
        com = false;
    }
    divide.onclick = function(e){
        operatorA = result.textContent;
        operation = "/";
        clear = 0;
        com = false;
    }
    times.onclick = function(e){
        operatorA = result.textContent;
        operation = "*";
        clear = 0;
        com = false;
    }
    //AUX FUNCTIONS
    percentage.onclick = function(e){
        operatorA = result.textContent;
        result.textContent = parseFloat(operatorA) / 100;
        result.textContent = result.textContent.toFixed(2);
    }
    changeSign.onclick = function(e){
        result.textContent = parseFloat(result.textContent) * (-1);
    }
    equal.onclick = function(e){
        operatorB = result.textContent;
        resolve(operatorA,operatorB,operation);
    }
    coma.onclick = function(e){
        if (com == false){
           result.textContent = result.textContent + ".";
           com = true;
        }
    }
    clear.onclick = function(e){
        result.textContent = "0"
        operatorA = "";
        operatorB = "";
        com = false;
    }
    function clean(){ //When an operation is set, the text content should return to "" 
        if (clear == 0){
            result.textContent = "";
            clear = 1;
        }
    }
    function isCero(){ //if the number we have in the screen is 0 and we want to type an other number, we should clean that "0"
        if (result.textContent == "0")
            result.textContent = "";
    }
    
}

