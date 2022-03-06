function computerPlay(){
    let computerChoise = ["rock","paper","scissor"];
    return computerChoise[Math.floor(Math.random()*3)]
}

function play(playerChoise, computerChoise){
    playerChoiseLowerCase = playerChoise.toLowerCase()
    switch(playerChoiseLowerCase){
        case "rock":
            switch(computerChoise){
                case "rock":
                    return ["draw",0]
                case "paper":
                    return ["you lost, paper beats rock",-1]
                case "scissor":
                    return ["you won, rock beats scissor",1]
            }
        case "paper":
            switch(computerChoise){
                case "paper":
                    return ["draw",0]
                case "rock":
                    return ["you won, paper beats rock",1]
                case "scissor":
                    return ["you lost, scissor beats paper",-1]
            }
        case "scissor":
            switch(computerChoise){
                case "scissor":
                    return ["draw",0]
                case "rock":
                    return ["you lost, rock beats scissor",-1]
                case "paper":
                    return ["you won, scissor beats paper",1]
            }
        default:
            return ["wrong input",0]
    }
}
function game(round){
    let playerWins = 0;
    let computerWins = 0;
    let result;
    let playerChoise
    for (let i = 0; i < 5 ; i++){
        playerChoise = prompt("what do you pick for this hand?");
        result = play(playerChoise, computerPlay());
        console.log(result[0]);
        if (result[1] === 1)
            playerWins += 1;
        else if(result[1] === -1)
            computerWins += 1;
    }
    console.log(`final result: Player ${playerWins} - ${computerWins} Computer`)
}
game()