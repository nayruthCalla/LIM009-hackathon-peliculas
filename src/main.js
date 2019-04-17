const searchTitle = document.getElementById("btn-search"),
  apikey = "&apikey=7ef620f9",
  btnDataFull = document.getElementById("btn-search-data");
uniqueData = document.getElementById("unique-data");
let urlMain = "https://www.omdbapi.com/?",
  url = "";
url = `${urlMain}s=terror${apikey}`;
console.log(url);
fetch(url)
  .then(result => result.json())
  .then(
    result => {
      let arrData = result.Search;
      console.log(result.Search);

      template(arrData);
      orderFetch(arrData);
    }

    // console.log(GlobalPoke.sortData(arrData, "name", "a-z"));
  )
  .catch(error => console.log(error));

searchTitle.addEventListener("click", e => {
  let getTextSearch = document.getElementById("busqueda").value.trim();
  // console.log(getTextSearch);
  url = `${urlMain}t=${getTextSearch}${apikey}`;
  fetch(url)
    .then(data => data.json())
    .then(data => showMovie(data));
});

btnDataFull.addEventListener("click", () => {
  let titleDataFull = document.getElementById("search-data-full").value.trim();
  url = `${urlMain}s=${titleDataFull}${apikey}`;
  // console.log(url);
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
    clear += ` <div class="text-center col-xs-8 col-sm-4 col-md-3 margin " style="width:250px; overflow: hidden; height:400px;border-color:rgba(123, 185, 180, 0.384); border-style:solid;border-radius: 15px; box-shadow: 0px 4px 10px rgba(7, 1, 20, 0.747); ">
    <h3 class='color-white-text' font-weight: bold">${view.Title}</h3>
    <img class="border" src= "${
      view.Poster === "N/A" ? "no hay imagen" : view.Poster
    }"style="width:220px; height:190px"></>
    <h4 class='color-white-text'>Año de Estreno:${view.Year}</h4>
    <h4 class='color-white-text'>Genero: ${view.Type}</h4>
     </div>`;
    document.getElementById("data-omdb").innerHTML = `${clear}`;
  });
};
// background-color: rgba(15, 46, 63, 1)
const showMovie = view => {
  let template = "";
  template = `<div >
          <h2 class='left-datos' style="background-color: rgba(15, 46, 63, 0.10);box-shadow: 0px 4px 5px rgba(7, 1, 20, 0.747)">${
            view.Title
          }</h2>
          <img src=${
            view.Poster
          } align="left" style="margin-right: 10%; overflow: hidden; padding: 2%;box-shadow: 0px 4px 5px rgba(7, 1, 20, 0.747)"></>
          <h3  style="color: rgba(15, 46, 63, 1) ">Sinopsis: ${view.Plot}</h3>
          <h3 class='left-datos'>Género:${view.Genre}</h3>
          <h3>Año de Estreno:${view.Year}</h3>
          <h3>duracion: ${view.Runtime}</h3>
          <h3>Reparto:${view.Actors}</h3>
          <button type="button" class="btn btn-primary"  onclick="javascript:window.location.reload();">Regresar</button>
                 </div>`;
  document.getElementById("data-omdb").innerHTML = `${template}`;
};
/////ordeenar
const idBtnOrder = document.getElementById("btn-order");
const orderFetch = valuesObjet => {
  return idBtnOrder.addEventListener("change", () => {
    console.log(document.getElementById("btn-order").value);
    template(
      GlobalPoke.sortData(
        valuesObjet,
        "name",
        document.getElementById("btn-order").value
      )
    );
  });
};

// uniqueData.addEventListener("keydown", e => {
//   if (event.key === "Enter") {
//     let getTextSearch = e.target.value.trim();
//     console.log(getTextSearch);
//     url = `${urlMain}t=${getTextSearch}${apikey}`;
//     fetch(url)
//       .then(data => data.json())
//       .then(data => console.log(showMovie(data)));
//   }
// });
