    var operatorA;
    var operatorB;
    var operation = "";
    var clear = 1;
    var com = false;
function init(){
    var result = document.getElementById("result");
    var nine = document.getElementById("nine");
    var eight = document.getElementById("eight");
    var seven = document.getElementById("seven");
    var six = document.getElementById("six");
    var five = document.getElementById("five");
    var four = document.getElementById("four");
    var three = document.getElementById("three");
    var two = document.getElementById("two");
    var one = document.getElementById("one");
    var cero = document.getElementById("cero");
    var clear = document.getElementById("clear");
    var changeSign = document.getElementById("changeSign");
    var percentage = document.getElementById("percentage");
    var divide = document.getElementById("divide");
    var times = document.getElementById("times");
    var minus = document.getElementById("minus");
    var plus = document.getElementById("plus");
    var equal = document.getElementById("equal");

    
    function clean(){
        if (clear == 0){
            result.textContent = "";
            clear = 1;
        }
    }
    function isCero(){
        if (result.textContent == "0")
            result.textContent = "";
    }
    /*EVENTS*/
    nine.onclick = function(e){
        isCero();
        clean();
        result.textContent = result.textContent + "9";
    }
    eight.onclick = function(e){
        isCero();
        clean();
        result.textContent = result.textContent + "8";
    }
    seven.onclick = function(e){
        isCero();
        clean();
        result.textContent = result.textContent + "7";
    }
    six.onclick = function(e){
        isCero();
        clean();
        result.textContent = result.textContent + "6";
    }
    five.onclick = function(e){
        isCero();
        clean();
        result.textContent = result.textContent + "5";
    }
    four.onclick = function(e){
        isCero();
        clean();
        result.textContent = result.textContent + "4";
    }
    three.onclick = function(e){
        isCero();
        clean();
        result.textContent = result.textContent + "3";
    }
    two.onclick = function(e){
        isCero();
        clean();
        result.textContent = result.textContent + "2";
    }
    one.onclick = function(e){
        isCero();
        clean();
        result.textContent = result.textContent + "1";
    }
    cero.onclick = function(e){
        isCero();
        clean();
        result.textContent = result.textContent + "0";
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

    /*OPERATIONS */
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
    percentage.onclick = function(e){
        operatorA = result.textContent;
        result.textContent = parseFloat(operatorA) / 100;
        result.textContent = result.textContent.toFixed(2);
    }
    changeSign.onclick = function(e){
        result.textContent = parseFloat(result.textContent) * (-1)
        
    }
    equal.onclick = function(e){
        operatorB = result.textContent;
        resolve();
    }
    function resolve(){
        var res = 0;
        switch(operation){
            case "+":
                res = parseFloat(operatorA) + parseFloat(operatorB);
                res = res.toFixed(2);
                break;
            case "-":
                res = parseFloat(operatorA) - parseFloat(operatorB);
                res = res.toFixed(2);
                break;
            case "/":
                res = parseFloat(operatorA) / parseFloat(operatorB);
                res = res.toFixed(2);
                break;
            case "*":
                res = parseFloat(operatorA) * parseFloat(operatorB);
                res = res.toFixed(2);
                break;
        }
        result.textContent = res;
    }
}

