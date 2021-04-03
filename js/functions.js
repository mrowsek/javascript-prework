/* Printing score after one turn */
const printMessage = (msg) =>{
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div).classList.add('score');
}
/* Clears turn score */
const clearMessages = () => {
	document.getElementById('messages').innerHTML = '';
}
/* Here variables Players score equal 0 and winning points */
let sumHum = 0;
let sumPc = 0;
const winnerPoints = 10;

/* This function recives two arguments. One is point = 1 or -1. Second argument is name of the player. First all points will be sumarised and when player achives winnerPoints than it will print message from Alex, ask player if he wants to play second time, clear all points data.  */
const printScore = (arg, player) =>{
	if(arg>0){
		sumHum += arg;
	}else {
		sumPc+=1;
	}
	document.getElementById('scoore').innerHTML = `Alex: ${sumPc}  ${player}: ${sumHum}`;
	
	if(sumHum == winnerPoints) {
		let welcomeDiv = document.getElementById('welcomeBox');
		let btn = document.createElement('BUTTON');
		welcomeDiv.classList.remove('noDisplay');
		welcomeDiv.innerHTML = 'Gratuluje wygranej :-)';
		sumHum = 0;
		sumPc = 0;
		document.getElementById('scoore').innerHTML = `Alex: ${sumPc}  ${player}: ${sumHum}`;
		btn.innerHTML = 'Jeszcze raz'
		welcomeDiv.appendChild(btn).addEventListener('click', ()=> {
			welcomeDiv.classList.add('noDisplay')
			clearMessages();
		});
	} else if(sumPc ==winnerPoints){
		let welcomeDiv = document.getElementById('welcomeBox');
		let btn = document.createElement('BUTTON');
		welcomeDiv.classList.remove('noDisplay');
		welcomeDiv.innerHTML = 'Przegrałeś, ale nie przejmuj się! Zagramy jeszcze raz? :-)';
		sumPc = 0;
		sumHum = 0;
		document.getElementById('scoore').innerHTML = `Alex: ${sumPc}  ${player}: ${sumHum}`;
		btn.innerHTML = 'Tak'
		welcomeDiv.appendChild(btn).addEventListener('click', ()=> {
			welcomeDiv.classList.add('noDisplay')
			clearMessages();
		});
	}
}