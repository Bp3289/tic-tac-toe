function startGame(){
		document.turn = "X";

		setMessage(document.turn + " gets to start.");
	}

	function setMessage(msg) {
		document.getElementById('message').innerText = msg;
	}

	function nextMove(square) {
		if (square.innerText === "") {
			square.innerText = document.turn;
			switchTurn();
		} else {
			setMessage("That square is already used.");
		}
	}

	function switchTurn() {
		if (document.turn =="X") {
			document.turn = "O";
		} else {
			document.turn = "X";
		}
		setMessage("It's" + document.turn + "'s turn!");
	}