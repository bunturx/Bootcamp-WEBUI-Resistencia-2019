var result = document.getElementById("result");
const keys = document.querySelector(".calculator");


if(keys){
    console.log("h");
    keys.addEventListener("click", function(e){
        if(e.target.matches("button") && isNaN(e.target.textContent) == false){
            result.textContent = result.textContent + e.target.textContent;
        }
    });
}

console.log("Hola");