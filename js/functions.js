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
const printScore = (arg) =>{
	if(arg>0){
		sumHum += arg;
	}else {
		sumPc+=1;
	}
	document.getElementById('scoore').innerHTML = `Twoje punkty: ${sumHum} Alex: ${sumPc}`;
	
	if(sumHum == winnerPoints) {
		alert('Wyrałeś :-)');
		sumHum = 0;
		sumPc = 0;
		document.getElementById('scoore').innerHTML = `Twoje punkty: ${sumHum} Alex: ${sumPc}`;
	} else if(sumPc ==winnerPoints){
		alert('Przegrałeś, ale nie przejmuj się zagrajmy jeszcze raz :-)');
		sumPc = 0;
		sumHum = 0;
		document.getElementById('scoore').innerHTML = `Twoje punkty: ${sumHum} Alex: ${sumPc}`;
	}
}