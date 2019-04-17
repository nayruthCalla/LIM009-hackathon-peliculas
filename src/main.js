const searchTitle = document.getElementById("btn-search"),
  apikey = "&apikey=7ef620f9",
  btnDetail = document.getElementById("cont-data");
uniqueData = document.getElementById("unique-data");
let urlMain = "https://www.omdbapi.com/?",
  url = "";
uniqueData.addEventListener("keydown", e => {
  if (event.key === "Enter") {
    let getTextSearch = e.target.value.trim();
    // console.log(getTextSearch);
    url = `${urlMain}t=${getTextSearch}${apikey}`;
    fetch(url)
      .then(data => data.json())
      .then(data => showMovie(data));
  }
});

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
    clear += ` <div class=" text-center col-xs-8 col-sm-4 col-md-3 margin " style="width:300px; height:400px; border-style:solid;">
    <h3 font-weight: bold">${view.Title}</h3>
    <img src= ${view.Poster} style="width:160px; height:180px"></>
    <h4>Año de Estreno:${view.Year}</h4>
    <h4>Genero: ${view.Type}</h4>
    <button>mas...+</button>  
    </div>`;
    document.getElementById("data-omdb").innerHTML = `${clear}`;
  });
};

const showMovie = view => {
  let template = "";
  template = ` <div>
          <h2>${view.Title}</h2>
          <img src=${view.Poster}></>
          <h3>Género:${view.Genre}</h3>
          <h3>Año de Estreno:${view.Year}</h3>
          <h3>duracion: ${view.Runtime}</h3>
          <h3>Reparto:${view.Actors}</h3>
          <h3>Sinopsis:${view.Plot}</h3>
          </div>`;
  document.getElementById("data-omdb").innerHTML = `${template}`;
};
