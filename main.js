console.log('Tic-Tac-Toe');

let boxes = document.querySelectorAll('.box');
let player1Score = document.querySelector('.pOne');
let player2Score = document.querySelector('.pTwo');
let result = document.querySelector('.result');
let reset = document.querySelector('.reset');
let newSeriese = document.querySelector('.newSeriese')


let counter = 0;
let playerOneSelections = [];
let playerTwoSelections = [];
let playerOneCombo = [];
let playerTwoCombo = [];
let hasWinner = false;
let playerOneScore = 0;
let playerTwoScore = 0;
const winningCombinations = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['1', '5', '9'],
    ['3', '5', '7'],
];

const doCross = (e)=>{
    e.target.textContent = 'x'
    e.target.classList.toggle('crossDone');
    e.target.classList.toggle('xDone');
    playerOneSelections.push(e.target.classList[0]);
    createCombo(playerOneSelections, playerOneCombo);
    // validation(playerOneCombo, winningCombinations, result1);
    for(let i=0; i<playerOneCombo.length; i++){
        for(let j=0; j<winningCombinations.length; j++){
            if(playerOneCombo[i] == winningCombinations[j].sort().join('')){
                playerOneScore = playerOneScore + 1;
                hasWinner = true;
                break;
            }
        }
        if(hasWinner){
            break;
        }
    }
    counter++;
    if(hasWinner){
        result.textContent = "Player 1 wins";
        player1Score.textContent = playerOneScore;
    }
}

const doCircle = (e)=>{
        e.target.textContent = 'o';
        e.target.classList.toggle('circleDone');
        e.target.classList.toggle('oDone');
        playerTwoSelections.push(e.target.classList[0]);
        createCombo(playerTwoSelections, playerTwoCombo);
        // validation(playerTwoCombo, winningCombinations, result2);
        for(let i=0; i<playerTwoCombo.length; i++){
            for(let j=0; j<winningCombinations.length; j++){
                if(playerTwoCombo[i] == winningCombinations[j].sort().join('')){
                    playerTwoScore = playerTwoScore +1;
                    hasWinner = true;
                    break;
                }
            }
            if(hasWinner){
                break;
            }
        }
        counter++;
        if(hasWinner){
            result.textContent = "Player 2 wins";
            player2Score.textContent = playerTwoScore;
        }
}

const playGame = (e)=>{
    if(!e.target.classList.contains('circleDone') && !e.target.classList.contains('crossDone') && hasWinner === false){
        if(counter%2 === 0) {
            doCross(e);
            // validation(playerOneCombo, winningCombinations, result1);
        } else {
            doCircle(e);
            // validation(playerTwoCombo, winningCombinations, result2);
        }
    } 
}

const createCombo = (arr1, arr2)=>{
    for(let i=0; i<arr1.length; i++){
        arr2[i]=arr1.slice(i, i+3);
    }
    if(arr2.length > 2){
        arr2[arr2.length - 2].push(arr2[0][0])
        arr2[arr2.length - 1].push(arr2[0][0])
        arr2[arr2.length - 1].push(arr2[0][1])
    }
    for(let j=0; j<arr2.length; j++){ 
        arr2[j]= arr2[j].sort().join('');
    }
}

// function createCombo(inputArr){
//     let resultArr = [];
//     for(let i = 0; i< inputArr.length; i++){
//         resultArr.push(inputArr.slice(0,3));
//         let currentElem = inputArr[0];
//         inputArr = inputArr.slice(1,inputArr.length);
//         inputArr.push(currentElem);
//     }
//     return resultArr;
// }
// const validation =(arr1, arr2, res)=>{
// for(let i=0; i<arr1.length; i++){
//     for(let j=0; j<arr2.length; j++){
//         if(arr1[i] == arr2[j].sort().join('')){
//             res = res +1;
//              break;
//         }
//     }
//     if(res === 1){
//         break
//     }
// }
// }


// const finalValidation = (arr1, arr2, res)=>{
//     if(arr1.length>0){
//         arr1.forEach(firstValidation);
//         let outcome = arr2.forEach(secondValidation);
//         if(outcome){
//             res = res +1;
//         }
//     }
// }


// const firstValidation = (element1)=>{ 
//         secondValidation(element1)
//     }
// const secondValidation = (element2)=>{
//     if(element2.sort().join('') == element1){
//         return true;
//     }
// }
const resetTheGame = (e)=>{
    boxes.forEach((element)=>{
        element.classList.remove('circleDone');
        element.classList.remove('crossDone');
        element.classList.remove('xDone');
        element.classList.remove('oDone');
        element.textContent = '?';
    })
    hasWinner = false;
    counter = 0;
    playerOneSelections = [];
    playerTwoSelections = [];
    playerOneCombo = [];
    playerTwoCombo = [];
    result.textContent = '?';
}

const startNewSeriese = ()=>{
    playerOneScore = 0;
    playerTwoScore = 0;
    player1Score.textContent = playerOneScore;
    player2Score.textContent = playerTwoScore;
}


boxes.forEach((element)=>{element.addEventListener('click',playGame)});
reset.addEventListener('click', resetTheGame);
newSeriese.addEventListener('click', startNewSeriese);
