/*fetch('https://raw.githubusercontent.com/Cormaxs/Rosaborido.online/main/recetas/algo.txt') .then(response => response.text()) .then(data => { const contenido = data; alert(contenido); }) .catch(error => alert(error));*/


async function main(){
  url = 'https://raw.githubusercontent.com/Cormaxs/Rosaborido.online/main/recetas/algo1.txt';
pedir(url)
}


//funcion que hace solicitud de los archivos
 async function pedir(link) {
  //alert(link);
  await fetch(link)
    .then( async response => {
      if (response.status >= 200 && response.status < 300) {
         estado =  response.status;//guardo el estado de la solicitud
         await estado;
       // alert("estado de "+k+" = "+estado)
        return response.text();
      } else {
        estado = 1
        return estado;
        //throw new Error('Error en la solicitud de pedir');
      }
    })
    .then(text => {
       parts = text.split();
       alert(parts);
      pasar = parts;
    })
    .catch(error => {
      alert('Error: ' + error.message);
    });
}



//OBTIENE EL NOMBRE DE LOS ARCHIVOS 
function nombreA(){
var nombreArch = url.split('/');
cabeza = nombreArch; //nombre de inicio
nombreArch = nombreArch[nombreArch.length - 1]; // toma la ultima parte del archivo como nombre
//alert("nombre de archivos = "+nombreArch);
alert("nombre arch = "+nombreArch);
return nombreArch;

}


//recorre todos los archivos que hay y guarda los nombres en un lista
async function probar(){
  //alert("probar")
   k = 1; algo = "algo1.txt"; archivos = [];
  while(k <= 5){
    urlC = 'https://raw.githubusercontent.com/Cormaxs/Rosaborido.online/main/recetas/'+algo;
    await pedir(urlC)
    if(estado >= 200 && estado < 300){
      archivos.unshift(algo);
     // alert("promesa "+k+" = "+algo)//promesa
      k = k+1;
      algo = "algo"+k+".txt";
    }
    else if(estado == 1){
     // alert("error en probar")
      break;
    }
  }
 //alert("lista de archivos = "+archivos)
}



//carga las receta en su respectivo lugar
function agregCont(lista){
  var elemento = document.getElementById("primero");
  elemento.innerHTML = lista;
}

main();