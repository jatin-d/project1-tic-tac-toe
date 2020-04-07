console.log('Tic-Tac-Toe');

let boxes = document.querySelectorAll('.box');
let counter = 0;
const playerOneSelections = [];
const playerTwoSelections = [];
const winningCombinations = [
    ['one', 'two', 'three'],
    ['four', 'fibve', 'six'],
    ['seven', 'eight', 'nine'],
    ['one', 'four', 'seven'],
    ['two', 'five', 'eight'],
    ['three', 'six', 'nine'],
    ['one', 'five', 'nine'],
    ['three', 'five', 'seven'],
];

const doCross = (e)=>{
    e.target.classList.toggle('crossDone');
    counter++;
    playerOneSelections.push(e.target.classList[0]);
    // e.target.classList.toggle('crossDone');
    // e.target
}

const doCircle = (e)=>{
    e.target.classList.toggle('circleDone');
    counter++;
    playerTwoSelections.push(e.target.classList[0]);
}

const playGame = (e)=>{
    if(!e.target.classList.contains('circleDone') && !e.target.classList.contains('crossDone')){
        if(counter%2 === 0) {
            doCross(e);
        } else {
            doCircle(e);
        }
    }
}

boxes.forEach((element)=>{element.addEventListener('click',playGame)})