function agregaPosteo() {
//escribe aca el codigo
var containerPosteos=document.getElementById("contenedor-posteos");
var nombreFF=document.getElementById("nombre").value;
var contenidoFF=document.getElementById("cajaposteos").value;

//nodo donde ira el post
var nuevoPost=document.createElement("div");
//creacion de elementos para guardar valores
var contenedorNombre=document.createElement("strong");
var contenedorPost=document.createElement("p");
var separacion=document.createElement("hr");

//elemento para corazon
var parrafCorazon=document.createElement('p');
var i=document.createElement('i');
//padre a icono de corazon
parrafCorazon.appendChild(i);
//atributos a corazon
parrafCorazon.setAttribute("class","corazon");
i.setAttribute("class","fa fa-heart");
i.setAttribute("arial-hidden","true");
//transformar nombre a nodo texto
var nodoNombre=document.createTextNode(nombreFF+" escribio:");
var nodoPosteo=document.createTextNode(contenidoFF);

//asignacion de padres a nodos creados
contenedorNombre.appendChild(nodoNombre);
contenedorPost.appendChild(nodoPosteo);

//asignamos padre a nombre y contenido
nuevoPost.appendChild(contenedorNombre);
nuevoPost.appendChild(contenedorPost);
nuevoPost.appendChild(parrafCorazon);
nuevoPost.appendChild(separacion);

//creamos funcion click para corazon y se le asigna color de css
i.addEventListener("click", function(){
	i.classList.toggle('rojo');
});

//atributos a el post y se agregan a contenedor-posteos
nuevoPost.setAttribute("class","posteo");
containerPosteos.appendChild(nuevoPost);
//reseteo de campos
document.getElementById("nombre").value ="";
document.getElementById("cajaposteos").value = "";
}