

function fillBoard(el) {

    console.log(el);
    console.log(XTurn);
    if (el.textContent !== '') {
        alert('hey place click on empty box');
        return;
    }
    count = count + 1;
    if (XTurn) {
        el.textContent = 'X';
    } else {
        el.textContent = 'O';
    }

    XTurn = !XTurn;
}

let board = document.getElementById('board');
let XTurn = true;
let count = 0;

for (let index = 0; index < board.children.length; index++) {
    const child = board.children[index]; // dom element
    child.addEventListener('click', function () {
        if (count >= 9) {
            alert('Game is over');
            return ;
        }
        fillBoard(child);
        let gameDone = isGameDone();
        if (gameDone != '') {
            alert('Game is done, ' + gameDone + ' is the winner');
            count = 9;
            return ;
        }
    });
    console.log(child.tagName);
}

function isGameOver(marking) { // marking X or O
     
    if (board.children[0] == board.children[1] && 
        board.children[1] == board.children[2] && 
        board.children[0] == marking) {
        return true;
    }
    if (board.children[3] == board.children[4] && 
        board.children[4] == board.children[5] && board.children[3] == marking) {
        return true;
    }
    if (board.children[6] == board.children[7] && board.children[7] == board.children[8] && board.children[6] == marking) {
        return true;
    }
    if (board.children[2] == board.children[4] && board.children[2] == board.children[6] && board.children[6] == marking) {
        return true;
    }
    // TODO: fill the rest of the if statements

}

// function isGameDone() {
//     let combinations = [
//         [0 , 1 ,2],
//         [3,  4, 5],
//         [6,  7 ,8],
//         [0, 3,  6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ];
//     let markingsArray = ['X', 'O'];
//     for (let index = 0; index < markingsArray.length; index++) {
//         let marking = markingsArray[index];
//         for (let i = 0; i < combinations.length; i++) {
//             let combination = combinations[i];
//             if (board.children[combination[0]].textContent == board.children[combination[1]].textContent &&
//                 board.children[combination[1]].textContent == board.children[combination[2]].textContent &&
//                 board.children[combination[0]].textContent == marking) {
//                 return marking;
//             }
//         }
//     }
//     return ''
// }

function isGameDone() {
    let combinations = [
        [0 , 1 ,2],
        [3,  4, 5],
        [6,  7 ,8],
        [0, 3,  6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
        for (let i = 0; i < combinations.length; i++) {
            let combination = combinations[i];
            if (board.children[combination[0]].textContent == board.children[combination[1]].textContent &&
                board.children[combination[1]].textContent == board.children[combination[2]].textContent &&
                board.children[combination[0]].textContent !== '') {
                return board.children[combination[0]].textContent;
            }
        }
    return ''
}

