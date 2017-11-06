//evento al boton "tweet"
var btn = document.getElementById("tweet");
	btn.addEventListener("click", newTweet);
	

	
//funcion para agregar comentarios con el boton tweet
	function newTweet(){
		var newMsg = document.getElementById("msg").value;
		document.getElementById("msg").value = " ";
		var content = document.getElementById("cont");
		var addComment = document.createElement("div");

		var textNewComment = document.createTextNode(newMsg);
		var contenedorElemento = document.createElement('p');
		contenedorElemento.appendChild(textNewComment);
		addComment.appendChild(contenedorElemento);

		cont.appendChild(addComment);
	}

/*
if(newMsg.length == 0 || newMsg.value == null) {
		   	btn.disabled=true;
   		} else {
   			btn.disabled=false;
   		}
*/


