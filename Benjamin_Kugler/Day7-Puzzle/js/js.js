//This document contains the swap function for the board tiles.

let trySwap = function(tile,whiteTile){
    //The white tile position, and the clicked tile position are saved in two variables so we can re-use them much more easier.
    //both var will be an array, where the first element is the row number and the second element is the column number.
    let tilePosition = getTilePosition(tile);
    let whitePosition = getTilePosition(whiteTile);
    //Check if white tile is above the clicked tile.
      if (tilePosition[1] > 0){
        if (whitePosition[1] == tilePosition[1] - 1 && whitePosition[2]==tilePosition[2]){
          changeTiles(tile,whiteTile);
        }
      }
      //Check if white tile is under the clicked tile.
      if (tilePosition[1] < parseInt(array.length - 1)){
        if (whitePosition[1] - 1 == tilePosition[1] && whitePosition[2] == tilePosition[2]){
          changeTiles(tile,whiteTile)
        }
      }
      //Check if white tile is on the right of the clicked tile.
      if (tilePosition[2] < array.length - 1){
        if (whitePosition[2] - 1 == tilePosition[2] && parseInt(whitePosition[1]) == parseInt(tilePosition[1])){
          changeTiles(tile,whiteTile)
        }
      }
      //Check if white tile is on the left of the clicked tile.
      if (tilePosition[2] > 0){
        if (whitePosition[2] == tilePosition[2] - 1 && whitePosition[1]==tilePosition[1]){
          changeTiles(tile,whiteTile)
        }
      }
    
      //If one of the conditions is true, then we can swap between the clicked and white tiles
      function changeTiles(a,b){
        b.className = b.className.substr(0,8);
        a.className = a.className + " last"
        let temp = a.textContent;
        a.textContent = b.textContent;
        b.textContent= temp
        moves.textContent = parseInt(moves.textContent) + 1
        checkIfResolved();
      }
      function getTilePosition(tile){
        let tilePosition = tile.className;
        tilePosition = tilePosition.split(' ')[1];
        tilePosition.split('');
        return tilePosition
      }
      function checkIfResolved(){
        let resolved = true;
        let cont = 0;
        for (let i = 0; i < array.length; i++){
          for (let j = 0; j < array.length; j++){
              let tile = document.querySelector(".p"+i+j);
              if (tile.textContent != finalArray[cont]){
                resolved = false;
              } 
              cont+=1;
          }
        }
        if (resolved){
            document.querySelector(".resolved").textContent = "RESOLVED IN: "+moves+" MOVES!"
        }
      }
    




  }
