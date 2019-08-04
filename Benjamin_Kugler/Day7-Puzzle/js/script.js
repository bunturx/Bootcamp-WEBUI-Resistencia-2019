//In this document we create a sliding puzzle, where we can choose between 3 different levels.
//3x3, 4x4 and 5x5

let array = []
//This final array we are going to use to check if the puzzle has been resolved.
let finalArray = []
let moves = document.getElementById("moves");

//puzzle() function is the main function.
let puzzle = function(){
//puzzle() scope begins


//We prepare the board which is already shuffled.
let prepareBoard = function(size){
  //Generates shuffled array with unique valies so we can load it to the one we are going to show.
  let shuffle = generateShuffleArray(size)
  //Lets clean the one that we are going to re-use every time we shuffle or select a new level.
  array = [];
  finalArray = [];
  //Cont variable, because "i" and "j" just go up to the numbers of rows we have.
  cont = 0;
  for (let i = 0; i < size; i++){
    let row = [];
    for (let j = 0; j < size; j++){
      //Here we set each position of the [i] row with the random number that we have in the shuffled array.
      row.push(shuffle[cont]);
      finalArray.push(cont + 1)
      cont+=1;
    }
    array.push(row);
  }
  //it returns an array in which each line is another array, with unique random numbers.
  return array
}

let generateShuffleArray = function(size){
  //A Set() is used so we can just add unique values.
  let newSet = new Set();
  let arrayShuffled = []
  ///We keep fillign our array until we have the number of unique numbers that we need.
  while(newSet.size < (size*size)){
      newSet.add(Math.floor((Math.random() * (size*size)) + 1));
  }
  //Handling array indexes is much easier that handling a set for me, so we transform that set into an array with the same values.
  for (let item of newSet) arrayShuffled.push(item);
  return arrayShuffled
}

//When a new level is clicked, we need to clean the screen before showing the new puzzle.
let deletePreviusPuzzle = function(){
  //Select all the rows from out html and remove them.
  //Chose this solution intead of just adding one more row or removing one, because is easier than adding one more column to each row.
  const rows = document.querySelectorAll(".row");
    rows.forEach(function(row){
      if (row){
        row.parentNode.removeChild(row);
      }
    })
}


//Here we render the puzzle.
let renderBoard = function(arreglo){
  deletePreviusPuzzle();
  const puzzleBoard = document.querySelector('.board');
  //For each row in our shuffled array, we have to create a div row.
  arreglo.forEach(function(row,index){
    let rowHtml = document.createElement("div");
    rowHtml.className = "row row"+index;
    row.forEach(function(element,elementPosition){
      //Now, for each element in each row, we have to create a tile.
      let position = document.createElement("button");
      //Lets give them the class name "row"+"column" so is very easy to find them when needed.
        position.className = "cell p"+index+elementPosition;
        position.innerHTML = element;
        rowHtml.appendChild(position);
        if (element == array.length*array.length){
          //There is always going to be an empty tile so we can move it. The class name "last" would be okey to identify it.
          position.className += " last"
        } 
      
    })
    puzzleBoard.appendChild(rowHtml);

})
}

  //Simple function to choose the puzzle level.
  let btns = document.querySelector('.level-select');
  btns.addEventListener("click",function(e){
    moves.textContent = 0;
    if (e.target.textContent == "Easy"){
      prepareBoard(3);
    } else if (e.target.textContent == "Medium"){
      prepareBoard(4);
    } else {prepareBoard(5)}
    renderBoard(array);
  })



  //We add an event listener to every tile on our board.
  const board = document.querySelector ('.board');
  board.addEventListener('click', function(e){
    if (e.target.matches("button")){
      let tile = e.target;
      let whiteTile = document.querySelector(".last")
      //We save the clicked tile and the white tile in different variables.
      //Now lets call the trySwap function, which is in js.js file.
      trySwap(tile,whiteTile);
    }
  })



  
//simple Event listener for out shuffle button.
//Every time we click on it, its going to render a different shuffle array.
const shuffleButton = document.querySelector(".button");
  shuffleButton.addEventListener('click', function(e){
    moves.textContent = 0;
    renderBoard(prepareBoard(array.length));
  })

//By default we show a 3x3 puzzle
  renderBoard(prepareBoard(3));


  //puzzle() scope ends
}

window.addEventListener('load',function(){
  puzzle();
})
