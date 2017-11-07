// boton deshabilitado
document.getElementById("tweet").disabled = true;

// habilitar/ deshabilitar boton y contar caracteres
function enableCount(){
	var newMsg = document.getElementById("msg").value;//valor de textarea 
	var textareaLength = newMsg.length;
	var max = 140;
	var count = textareaLength;
	// Cuenta regresiva
		max = 140 - count;
	//numero de la variable ḿax que variará segun el valor de count
	document.getElementById("tweetLength").innerHTML = max;

	if(count >= 1){ // habilitar boton con un caracter o mas
		document.getElementById("tweet").disabled = false;
	}
	if(count === 0 || count > 140){ //deshabilitar si no hay caracteres o hay mas de 140
		document.getElementById("tweet").disabled = true;
	}
	if(count >=0 && count < 120){//color azul entre 0 y 119 caracteres
		document.getElementById("tweetLength").style.color = "#547389"
	}
	if(count >= 120 && count < 130){//color morado entre 120 y 129 caracteres
		document.getElementById("tweetLength").style.color = "#B026BE"
	}
	if(count >= 130 && count <= 140){ //color rojo desde 130 a 140 caracteres
		document.getElementById("tweetLength").style.color = "#9F1122"
	}
}

//funcion para tamaño auto
/*var textarea = document.getElementById('msg');*/
var textarea = document.querySelector("textarea");
console.log(textarea);
textarea.addEventListener("keydown", autosize);
             
function autosize(){
  var resize = this;
  setTimeout(function(){
    resize.style.cssText = "height:auto; padding:0; overflow-y:hidden";
    resize.style.cssText = 'height:' + resize.scrollHeight + 'px';
  },0);
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



