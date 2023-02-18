function searchCharacter() {
    divRes.innerHTML = ""
    var input = document.getElementById("searchInput").value;
    fetch("https://rickandmortyapi.com/api/episode?name=" + input)
      .then(function (response) {
        return response.json();
      })
  
      .then(function (myJson) {
        console.log(myJson);
        divRes = document.querySelector("#resu");
        divRes.innerHTML = "";
        for (var i = 0; i < myJson.results.length; i++) {
          myJson.results.map(item => {
          divItem = document.createElement('div')
          divItem.innerHTML = `
            <div class="card" style="width: auto;">
              <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text"><b>Estatus: </b>${item.air_date}</p>
              <p class="card-text"><b>Especie: </b>${item.episode}</p>
              </div>
            </div>
            `
            divRes.appendChild(divItem);
          });
        }
      });
  }
  
  const apiRick = async (pagina) => {
    let url = "https://rickandmortyapi.com/api/episode?page=" + pagina;
    const api = await fetch(url);
    const data = await api.json();
    console.log(data);
    divRes = document.querySelector("#resultado");
    divRes.innerHTML = ""
    data.results.map(item => {
      divItem = document.createElement('div')
      divItem.innerHTML = `
        <div class="card" style="width: auto;">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text"><b>Estatus: </b>${item.air_date}</p>
            <p class="card-text"><b>Especie: </b>${item.episode}</p>
          </div>
        </div>
        `
  
      divRes.appendChild(divItem);
    });
  }
  apiRick(1)