    const cellbox = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
    let currentPlayer = "O";
    let gameover = false;
    const renderBox = () =>{
        const boxes = document.querySelectorAll(".cell"); 
        console.log(boxes);
           
        boxes.forEach((box, index) => {
            if(cellbox[index] === "O") {
                box.innerText = "O";
                box.style.color = "#ff6b6b";
            }
            else if (cellbox[index] === "X") {
                box.innerText = "X";
                box.style.color = "#6c5ce7";
            }
            else {
                box.innerText = "";
            }
        })
    };
    const move = (index) =>{
        if (gameover) {
            alert("Game is over. Please reset the game.")
            return;
        }
        if (cellbox[index] !== -1){
            alert("Invalid Move");
            return
        }
        
        cellbox[index] = currentPlayer;
        renderBox()
        const winner = checkwin();
        if(winner) {
            alert(`${winner} wins!`)
            gameover = true;
            return;
        }
        if(!cellbox.includes(-1)){
            alert("Game Tie, restart game")
            gameover = true;
            return;
        }
        if(currentPlayer === "O") {
            currentPlayer = "X"
        }
        else{
            currentPlayer = "O"
        }
        
        document.getElementById("current-player").innerText = `Current Player: ${currentPlayer}`;
    }
    function playerPresent(places, player){
        const [a, b, c] = places;
        return(
            cellbox[a] === player && 
            cellbox[b] === player &&
            cellbox[c] === player
        )
    }
    function checkwin() {
        const winner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let combination of winner) {
            if (playerPresent(combination, "O")) {
                return "O"
            }
            if  (playerPresent(combination, "X")) {
                return "X"
            }
        }
        
        return null;
    }
    function reset() {
        cellbox.fill(-1);
        currentPlayer = "O";
        gameover = false;
        document.getElementById("current-player").innerText = `Current Player: O`;       
        
        renderBox();
    }