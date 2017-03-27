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
		
		if (checkForWinner(document.turn)) {
			setMessage("Congratulations, " + document.turn + "! You win!");
		} else if (document.turn == "X") {
			document.turn = "O";
			setMessage("It's" + document.turn + "'s turn!");
		} else {
			document.turn = "X";
			setMessage("It's" + document.turn + "'s turn!");
		}
	}

	function checkForWinner(move) {
		var result = false;
		if (check(1, 2, 3, move) || check(4, 5, 6, move) || check(7, 8, 9, move) || check(1, 4, 7, move) || check(2, 5, 8, move) || check(3, 6, 9, move) || check(1, 5, 9, move) || check(3, 5, 7, move)) {
			result = true;
		}
		return result;
	}


	function check(a, b, c, move) {
		var result = false;
		if (getBox(a) === move && getBox(b) === getBox(c) === move) {
			result = true;
		}
		return result;
	}

	function getBox(number) {
	return	document.getElementById("s" + number).innerText;
	}