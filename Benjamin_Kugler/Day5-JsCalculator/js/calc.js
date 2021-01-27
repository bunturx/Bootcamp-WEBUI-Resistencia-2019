
//Simple calculator that works as ios calculator does.

//json structure for operations:
let everyOperations = {
    "+" : function(numberA,numberB) { return parseFloat(numberA) + parseFloat(numberB)},
    "-" : function(numberA,numberB) { return parseFloat(numberA) - parseFloat(numberB)},
    "X" : function(numberA,numberB) { return parseFloat(numberA) * parseFloat(numberB)},
    "/" : function(numberA,numberB) { return parseFloat(numberA) / parseFloat(numberB)}
}
let clear = 0; //When just a 0 is on screen, we need to clear that 0 to show other number.


let calculator = function(){
//Calculator scope begins
    let result = document.getElementById("result");
    let operatorA = 0;
    let operatorB = 0;
    let operationToExecute = "";
    


    //Event listener for numbers
    let numbers = document.querySelectorAll(".number");
    numbers.forEach(function(number){
        number.addEventListener("click",function(e){
            isCero(); //aux function to check if just a 0 is on screen.
            clean(); //If we want to set the second number, we should first clear the screen.
            result.textContent = result.textContent + e.target.textContent;
        })
    })

    //Event listener for operators
    let operations = document.querySelectorAll(".operation");
    operations.forEach(function(operationType){
        operationType.addEventListener("click",function(e){
            //we save the first number with what we have on screen.
            operatorA = result.textContent;
            //Now we save the operation.
            operationToExecute = e.target.textContent;
            //This clear variable is used for clean() function, now that the operation is set, we need to clear
            //the screen for the next number.
            clear = 0;
        })
    })

    //Event listener for extra operations such as Clean, Percentage and +/-
    let extraOps = document.querySelectorAll(".extraOps");
    extraOps.forEach(function(extraOp){
        extraOp.addEventListener("click",function(e){
            operatorA = result.textContent;
            let res = "";
            extraOpToExecute = e.target.textContent;
            let operation = extraOperations[extraOpToExecute];
            if (operation){
                res = operation(operatorA);
                result.textContent = res;
            }
        })
    })

    //Coma handling
    let array = [];
    let coma = document.getElementById("coma");
    coma.addEventListener("click", function(e){
        array = result.textContent.split('');
        if (array.includes('.')){
            console.log("Ya tiene coma");
        } else { result.textContent += "."}
    })

    let equal = document.getElementById("equal");
    equal.addEventListener("click", function(e){
        let res = 0;
        operatorB = result.textContent;
        let operation = everyOperations[operationToExecute]
        if (operation){
            res = operation(operatorA,operatorB);
            result.textContent = fixResult(res);
            log(result.textContent);
        }
    })
    let extraOperations = {
        "C" : function(numberA)  {  operatorA = "";
                                    operatorB = "";
                                    return 0},
        "%" : function(numberA) {   return parseFloat(numberA)/100 },
        "+/-" : function(numberA) { return parseFloat(numberA)*(-1)}
    }
    function clean(){ //When an operator is set, the text content should return to "" 
    if (clear == 0){
        result.textContent = "";
        clear = 1;
    }
}
function isCero(){ //if the number we have in the screen is 0 and we want to type an other number, we should clean that "0"
    if (result.textContent == "0")
        result.textContent = "";
}


function fixResult(res){
    const unsignedResult= Math.abs(res);
    const decimalPart = (unsignedResult)-(Math.floor(unsignedResult));

    return decimalPart === 0 ? res.toFixed(0) : res.toFixed(2);
}
let log = function(res){
    let newLog = operatorA + operationToExecute + operatorB + "=" + res;
    document.getElementById("log").textContent = document.getElementById("log").textContent + newLog;
    document.getElementById("log").textContent = document.getElementById("log").textContent + "\r\n"
}
//calculator scope ends    
}





window.addEventListener("load",function(){
    calculator();
})


