{
    document.getElementById('play-rock').addEventListener('click', ()=>{playGame('1');});
    document.getElementById('play-paper').addEventListener('click', ()=>{playGame('2');});
    document.getElementById('play-scissors').addEventListener('click', ()=>{playGame('3');});

    let player = '';
    const nameInput = () => {
        let welcomeDiv = document.getElementById('welcomeBox');
        let btn = document.createElement('BUTTON');
        btn.innerHTML = 'Zapisz'
        welcomeDiv.innerHTML = '<h4>Jak Masz na imię?</h4>';
        let input = welcomeDiv.appendChild(document.createElement('input'));
        input.setAttribute('type', 'text');
        welcomeDiv.appendChild(btn).addEventListener('click', () => {
            player = input.value;
            document.getElementById('player').classList.remove('noDisplay');
            welcomeDiv.classList.add('noDisplay');
        });

    }

    const welcomeBox = () => {
        let welcomeDiv = document.getElementById('welcomeBox');
        let btn = document.createElement('BUTTON');
        btn.innerHTML = 'Dalej'
        welcomeDiv.innerHTML = '<h4>Hej! :-) Nazywam się Aleks. Nauczyłem się ostatnio grać i chciałbym z kimś poćwiczyć. Zagrasz ze mną? Aby rozpocząć wystarczy kliknąć Dalej. Miłej zabawy :-)</h4>';
        welcomeDiv.appendChild(btn).addEventListener('click', ()=> nameInput());
    }

    const playGame = (playerInput) => {
        clearMessages();

        const randomNumber = Math.floor(Math.random() * 3 + 1);
    
        const getMoveName = (argMoveId) => {
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
        
        const displayResult = function (argComputerMove, argPlayerMove) {
            printMessage(`${player}: ${argPlayerMove}`);
            printMessage(`Alex: ${argComputerMove}`);
            
            if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
                printMessage('Wygrałeś'); printScore(1, player);
            }else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
                printMessage('Remis');
            }else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
                printMessage('Przegrałeś'); printScore(-1, player);
            } else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
                printMessage('Remis');
            }else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
                printMessage('Przegrałeś'); printScore(-1, player);
            }else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
                printMessage('Wygrałeś'); printScore(1, player);
            }else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
                printMessage('Przegrałeś'); printScore(-1, player);
            }else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
                printMessage('Wygrałeś'); printScore(1, player);
            }else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
                printMessage('Remis');
            }
        };

        displayResult(getMoveName(randomNumber), getMoveName(playerInput));    
    }
    welcomeBox();
}