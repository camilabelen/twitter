//habilitar/deshabilitar boton y contar caracteres

document.getElementById("tweet").disabled = true;//deshabilitado

// habilitar/ deshabilitar boton y contar caracteres
function enableCount(){
	var newMsg = document.getElementById("msg").value;//valor de textarea 
	var textareaLength = newMsg.length;
	var max = 140;
	var count = textareaLength;
	// Cuenta regresiva
		max = 140 - count;
	document.getElementById("tweetLength").innerHTML = max;

	if(count >= 1){ // habilitar boton con un caracter o mas
		document.getElementById("tweet").disabled = false;
	}
	if(count === 0 || count > 140){ //deshabilitar si no hay caracteres o hay mas de 140
		document.getElementById("tweet").disabled = true;
	}
	if(count >=0 && count < 120){
		document.getElementById("tweetLength").style.color = "#547389"
	}
	if(count >= 120 && count < 130){
		document.getElementById("tweetLength").style.color = "#B026BE"
	}
	if(count >= 130 && count <= 140){
		document.getElementById("tweetLength").style.color = "#9F1122"
	}

}

//funcion para agregar comentarios con el boton tweet
function newTweet(){
	//variable donde se guarda el contenido escrito en el textarea
	var newMsg = document.getElementById("msg").value;
	//borrar contenido textarea
	document.getElementById("msg").value = "";
	document.getElementById("tweetLength").innerHTML = "140";
	//contenedor de div de los nuevos comentarios
	var content = document.getElementById("cont");
	//elemento donde se guardara el nuevo comentario
	var addComment = document.createElement("div");
	//nodo texto comentario
	var textNewComment = document.createTextNode(newMsg);
	var contenedorElemento = document.createElement('p');
	/*agregando nodo texto contenido de textarea, 
	p contenedor del nodo texto y div contenedor de p*/
	contenedorElemento.appendChild(textNewComment);
	addComment.appendChild(contenedorElemento);
	cont.appendChild(addComment);
}



