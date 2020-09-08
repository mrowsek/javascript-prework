function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if (argMoveId == 2){
        return 'papier';
    } else if (argMoveId == 3){
        return 'nożyce';
    }
  
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  function displayResult(argComputerMove, argPlayerMove) {
      printMessage('Twój ruch to: ' + argPlayerMove);
      printMessage('Moj ruch to: ' + argComputerMove)
  
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
  }


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

let score = displayResult(computerMove, playerMove);
