
document.getElementById('play-rock').addEventListener('click', function(){playGame('1');});
document.getElementById('play-paper').addEventListener('click', function(){playGame('2');});
document.getElementById('play-scissors').addEventListener('click', function(){playGame('3');});

function playGame(playerInput) {
    clearMessages();

    const randomNumber = Math.floor(Math.random() * 3 + 1);
   
    let getMoveName = function (argMoveId){
        if(argMoveId == 1){
            return 'kamień';
        } else if (argMoveId == 2){
            return 'papier';
        } else if (argMoveId == 3){
            return 'nożyce';
        }
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    };
    
    let displayResult = function (argComputerMove, argPlayerMove) {
        printMessage('Twój ruch to: ' + argPlayerMove);
        printMessage('Moj ruch to: ' + argComputerMove);
        
        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        }else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
            printMessage('Remis');
        }else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
            printMessage('Przegrales');
        } else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
            printMessage('Remis');
        }else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            printMessage('Przegrales');
        }else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            printMessage('Wygrałeś');
        }else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
            printMessage('Przegrałeś');
        }else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Ty wygrałeś');
        }else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
            printMessage('Remis');
        }
    };

    displayResult(getMoveName(randomNumber), getMoveName(playerInput));    
}