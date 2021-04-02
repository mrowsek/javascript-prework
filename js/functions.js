function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div).classList.add('score');
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}