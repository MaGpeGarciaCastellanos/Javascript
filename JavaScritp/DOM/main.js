var cajas=document.getElementsByTagName('div');
//var cajas = document.getElementsByClassName('caja');
 var PrimeraCaja=document.getElementById('PrimeraCaja');
//PrimeraCaja.textContent='Hola Mundo';
//PrimeraCaja.innerHTML='<u><Hola Mundo</u>';


//---Creando Nodos

var caja=document.createElement('div');
var contenido=document.createTextNode('Hola Mundo');
caja.appendChild(contenido);
caja.setAttribute('class','caja naranja');

var contenedor =document.getElementById('contenedor');
contenedor.appendChild(caja);
