
function resolve(a,b,c){
    let res;
    const firstNum = parseFloat(a);
    const secondNum = parseFloat(b);
    const result = document.getElementById("result");
    switch(c){
        case "+":
            res = firstNum + secondNum;
            break;
        case "-":
            res = firstNum - secondNum;
            break;
        case "/":
            res = firstNum / secondNum;
            break;
        case "*":
            res = firstNum * secondNum;
            break;
    }
    result.textContent = fixResult(res);
    let newLog = a + c + b + "=" +res;
    document.getElementById("log").textContent = document.getElementById("log").textContent + newLog;
    document.getElementById("log").textContent = document.getElementById("log").textContent + "\r\n"
}

function fixResult(res){
    const unsignedResult= Math.abs(res);
    const decimalPart = (unsignedResult)-(Math.floor(unsignedResult));

    return decimalPart === 0 ? res.toFixed(0) : res.toFixed(2);
}