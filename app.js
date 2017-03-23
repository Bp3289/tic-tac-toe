var playerName1 = "" , playerName2 = "" , turn = "";
var grid = [[0,0,0], [0,0,0], [0,0,0]];
var hasWinner = 0, moveCount = 0;

function boardMsg(x) {
  console.log(x);
  return $("board").text(x);
  
}

function setTurn() {

  var r = Math.floor((Math.random() * 2) + 1);
  hasWinner = 0;
  if (r == 1) {
    turn = playerName1;
    boardMsg(playerName1 + "'s turn now!");
  }
  else {
    turn = playerName2;
    boardMsg(playerName2 + "'s turn now!");
  }
  


}

setTurn();