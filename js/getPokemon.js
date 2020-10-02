let offse = 0
let html = ""
let API = 'https://pokeapi.co/api/v2/pokemon?limit=14&offset='+offse+'.'
// const suma = document.getElementById('suma')
// const resta = document.getElementById('resta')

const getData = (api)=>{
  return fetch(api)
    .then( (response) =>response.json())
    .then((json)=>{
      llenarDatos(json),paginacion()
    })  
    .catch( (error) => {
      console.log('error', error);
    })
}
const getPokemon = (api)=>{
    omg = {}
    fetch(api)
    .then( (response) =>response.json())
    .then((json)=>{      
      console.log(json);
      imprimir(json)
    })  
    .catch( (error) => {
      console.log('error', error);
    })    
}
function imprimir (dato){
  html += '<div class="col">'
  html += '<div class="card" style="width: 10rem;">'      
  html += `<img src="${dato.sprites.front_default}" class="card-img-top" alt="...">`
    html += '<div class="card-body" >'
    html += ` <h5 class="card-title">${dato.name}</h5>`
    html += `<p class="card-text">Tipo: ${dato.types[0].type.name}</p>`
    html += `<p class="card-text">Peso: ${dato.weight} KG</p>`
    html += '</div>'
  html += '</div>'
  html += '</div>'
  document.getElementById("datosPersonaje").innerHTML= html
}
const llenarDatos = (data)=>{
  
  console.log(data);
  data.results.forEach((pj) => {
    const pokemon = getPokemon(pj.url)
    console.log(pokemon);      
  });
  // document.getElementById("datosPersonaje").innerHTML= html
}
/////
function suma(){
  html = ""
 offse+=14
 API = 'https://pokeapi.co/api/v2/pokemon?limit=14&offset='+offse+'.'
 getData(API)
}
function resta(){
  html = ""
  offse=offse-14
  API = 'https://pokeapi.co/api/v2/pokemon?limit=14&offset='+offse+'.'
  getData(API)
}
////
const paginacion = (data)=>{
  let prevDisable = ''
  let NextDisable = ''
  if (offse==0) {
    prevDisable = "disabled"
  } 
  let html = ''
  html += `<li class="page-item ${prevDisable}"><a class="page-link" id="resta" onclick="resta()">previous</a></li>`
  html += `<li class="page-item ${NextDisable}" ><a class="page-link " id="suma" onclick="suma()">next</a></li>`
  document.getElementById("paginacion").innerHTML=html
}
/////
getData(API)
