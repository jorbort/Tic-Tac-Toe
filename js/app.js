const gameBoard = (() => {

    let player = "X"
    gameActive = true;

    //creates an empty board array
    const board = ['','','','','','','','','']

    //all the possible game winning combos
    const winCombos = [
        [0,1,2],
        [0,3,6],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [0,4,8]
    ];
    
    let message = document.querySelector('.header')

    let checkWin =  () =>{
        let roundWon =false;
        for(let i = 0 ; i<=7; i++){
            const condition = winCombos[i];
            const a = board[condition[0]];
            const b = board[condition[1]];
            const c = board[condition[2]];

            if(a===''|| b===''|| c === ''){
                continue;
            }else{
                if(a===b && b === c ){
                    roundWon = true;
                    break;
                }
            }
        }
        if(roundWon){
            message.innerText = `Player ${player},Has won`;
            gameActive = false;
        }
        if(!board.includes('') && roundWon === false  ){
            gameActive = false;
            message.innerText = "It's a Draw" 
        }
    }

    grids = Array.from(document.getElementsByClassName('grid'));
    grids.forEach((element,index)=>{
        element.innerText = board[index];
        element.addEventListener('click',()=>{
            if(element.innerText === ""&& gameActive === true){
                if(player === 'X'){
                    element.innerText = "X";
                    board[index] = "X";
                    checkWin()
                    player='O'
                    console.log(board)
                    
                }else{
                    element.innerText = 'O';
                    board[index] = 'O';
                    checkWin()
                    player = "X"
                    console.log(board)
                    
                }
            }
        })
    }) 
})();








