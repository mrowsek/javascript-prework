const printMessage = (msg) =>{
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div).classList.add('score');
}

const clearMessages = () => {
	document.getElementById('messages').innerHTML = '';
}

let sumHum = 0;
let sumPc = 0;
const winnerPoints = 10;
const printScore = (arg, player) =>{
	if(arg>0){
		sumHum += arg;
	}else {
		sumPc+=1;
	}
	document.getElementById('scoore').innerHTML = `Alex: ${sumPc}  ${player}: ${sumHum}`;
	
	if(sumHum == winnerPoints) {
		let welcomeDiv = document.getElementById('welcomeBox');
		welcomeDiv.classList.remove('noDisplay');
		welcomeDiv.innerHTML = 'Gratuluje wygranej :-)';
		console.log('test');
		
		sumHum = 0;
		sumPc = 0;
		document.getElementById('scoore').innerHTML = `Alex: ${sumPc}  ${player}: ${sumHum}`;
	} else if(sumPc ==winnerPoints){
		let welcomeDiv = document.getElementById('welcomeBox');
		welcomeDiv.classList.remove('noDisplay');
		welcomeDiv.innerHTML = 'Przegrałeś, ale nie przejmuj się zagrajmy jeszcze raz :-)';
		sumPc = 0;
		sumHum = 0;
		document.getElementById('scoore').innerHTML = `Alex: ${sumPc}  ${player}: ${sumHum}`;
	}
}