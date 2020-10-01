const API = 'https://rickandmortyapi.com/api/character'


const getData = (api)=>{
  return fetch(api)
    .then( (response) =>response.json())
    .then((json)=>{
      // console.log('json-->', json);
      llenarDatos(json),paginacion(json.info)
    })  
    .catch( (error) => {
      console.log('error', error);
    })
}
const llenarDatos = (data)=>{
  let html = ""
  data.results.forEach((pj) => {
      html += '<div class="col">'
        html += '<div class="card" style="width: 10rem;">'
        html += `<img src="${pj.image}" class="card-img-top" alt="...">`
          html += '<div class="card-body" >'
          html += ` <h5 class="card-title">${pj.name}</h5>`
          html += `<p class="card-text">Status: ${pj.status}</p>`
          html += `<p class="card-text">Especie: ${pj.species}</p>`
          html += `<p class="card-text">Genero: ${pj.gender}</p>`
          html += '</div>'
        html += '</div>'
      html += '</div>'
  });
  document.getElementById("datosPersonaje").innerHTML= html
}
/////
const paginacion = (data)=>{
let html = ''
html += `<li class="page-item"><a class="page-link" onclick="getData('${data.prev}')">previous</a></li>`
html += `<li class="page-item"><a class="page-link" onclick="getData('${data.next}')">next</a></li>`
document.getElementById("paginacion").innerHTML=html
}
/////
getData(API)



/*

console.error();   Usar para los errores

.then( (response) =>{
  response.json()
  .then((json)=>{
      // console.log('json-->', json);
      llenarDatos(json)
    })  
  .catch( (error) => {
      console.log('error', error);
    })
})
.catch( (error) => {
      console.log('error', error);
)
    
    

*/ 