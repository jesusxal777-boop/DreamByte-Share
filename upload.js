function uploadFile(){

let file=document.getElementById("file").files[0];

if(!file){

alert("Selecciona un archivo");

return;

}

alert("Archivo listo para subir: "+file.name);

}
