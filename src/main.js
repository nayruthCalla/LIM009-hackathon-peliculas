const searchTitle = document.getElementById("btn-search"),
  apikey = "&apikey=7ef620f9",
  btnDetail = document.getElementById("cont-data");
uniqueData = document.getElementById("unique-data");
let urlMain = "https://www.omdbapi.com/?",
  url = "";

searchTitle.addEventListener("click", () => {
  let getTextSearch = document.getElementById("busqueda").value.trim();
  url = `${urlMain}s=${getTextSearch}${apikey}`;
  console.log(url);
  fetch(url)
    .then(result => result.json())
    .then(result => {
      let arrData = result.Search;
      template(arrData);
    })
    .catch(error => console.log(error));
});
const template = valuesData => {
  let clear = " ";
  valuesData.forEach(view => {
    clear += ` <div>
    <h2>${view.Title}</h2>
    <img src= ${view.Poster}></>
    <h3>Año de Estreno:${view.Year}</h3>
    <h3>Genero: ${view.Type}</h3>
    <button value='${view.Title}' id='${
      view.Title
    }' id='btn-deta' type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
   detalles</button>
    </div>`;
    document.getElementById("data-omdb").innerHTML = `${clear}`;
  });
};
