console.log('Tic-Tac-Toe');

let boxes = document.querySelectorAll('.box');
let counter = 0;
const playerOneSelections = [];
const playerTwoSelections = [];
const playerOneCombo = [];
const playerTwoCombo = [];
let result1 = 0;
let result2 = 0;
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
    // if (result1 === 0 && result2 === 0){
        e.target.classList.toggle('crossDone');
        playerOneSelections.push(e.target.classList[0]);
        createCombo(playerOneSelections, playerOneCombo);
        // validation(playerOneCombo, winningCombinations, result1);
        for(let i=0; i<playerOneCombo.length; i++){
            for(let j=0; j<winningCombinations.length; j++){
                if(playerOneCombo[i] == winningCombinations[j].sort().join('')){
                    result1 = result1 +1;
                }
            }
        }
        if(result1 === 1){window.alert("Player 1 has won the match")}
        counter++;
    // }
}

const doCircle = (e)=>{
    // if(result2 === 0 && result1 === 0){
        e.target.classList.toggle('circleDone');
        playerTwoSelections.push(e.target.classList[0]);
        createCombo(playerTwoSelections, playerTwoCombo);
        // validation(playerTwoCombo, winningCombinations, result2);
        for(let i=0; i<playerTwoCombo.length; i++){
            for(let j=0; j<winningCombinations.length; j++){
                if(playerTwoCombo[i] == winningCombinations[j].sort().join('')){
                    result2 = result2 +1;
                }
            }
        }
        if(result2 === 1){window.alert("Player 2 has won the match")}
        counter++;
    // }
}

const playGame = (e)=>{
    if(!e.target.classList.contains('circleDone') && !e.target.classList.contains('crossDone') && result2 === 0 && result1 === 0){
        if(counter%2 === 0) {
            doCross(e);
        } else {
            doCircle(e);
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

// const validation =(arr1, arr2, res)=>{
// for(let i=0; i<arr1.length; i++){
//     for(let j=0; j<arr2.length; j++){
//         if(arr1[i] == arr2[j].sort().join('')){
//             res = res +1;
//         }
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
// let validateScore = (winning, combo, res)=>{
//     if(combo.length > 2){
//         for(let i=0; i<winning.length; i++){
//             for(let j=0; j<combo.length; j++){
//                 for(k=0; k<winning[i].length; k++){
//                     for(l=0; l<combo[j].length; l++){
//                         if(winning[i][k]==combo[j][l]){
//                             res = res +1;
//                         }
//                     }
//                 }

//             }
//         }
//     }
// }

// console.log(result);



boxes.forEach((element)=>{element.addEventListener('click',playGame)});