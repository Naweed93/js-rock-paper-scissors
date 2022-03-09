const buttons = document.querySelectorAll('button');
const currentHand = document.querySelector('.currentHand');
const overall = document.querySelector('.overall');
let result=[0,0];

function computerPlay(){
    let computerChoise = ["rock","paper","scissor"];
    return computerChoise[Math.floor(Math.random()*3)]
}

function play(playerChoise, computerChoise){
    playerChoiseLowerCase = playerChoise.toLowerCase();
    switch(playerChoiseLowerCase){
        case "rock":
            switch(computerChoise){
                case "rock":
                    return ["draw.",0]
                case "paper":
                    return ["you lost, paper beats rock!",-1]
                case "scissor":
                    return ["you won, rock beats scissor!",1]
            }
        case "paper":
            switch(computerChoise){
                case "paper":
                    return ["draw.",0]
                case "rock":
                    return ["you won, paper beats rock!",1]
                case "scissor":
                    return ["you lost, scissor beats paper!",-1]
            }
        case "scissor":
            switch(computerChoise){
                case "scissor":
                    return ["draw.",0]
                case "rock":
                    return ["you lost, rock beats scissor!",-1]
                case "paper":
                    return ["you won, scissor beats paper!",1]
            }
        default:
            return ["wrong input.",0]
    }
}


buttons.forEach(button => {
    button.addEventListener('click',(e) =>{
        let playerChoise = e.target.innerText;
        showResult(play(playerChoise, computerPlay()));
        
    });
});

function showResult(handResult){
    currentHand.innerText = handResult[0];
    if (handResult[1] === 1)
        result[0] += 1;
    else if(handResult[1] === -1)
        result[1] += 1;
    overall.innerText = `current result is: player ${result[0]} - ${result[1]} computer`;
}