/*---------------------------------------------------------------
        Sports Football Javascript  Start               
---------------------------------------------------------------*/


//lodaPlayer Secoin

const lodaPlayer = () => {
    const loadPlayer = document.getElementById('input_fild');
    const playerFild = loadPlayer.value;
    loadPlayer.value = '';
    
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${playerFild}`

    fetch(url)
    .then(rep => rep.json())
    .then(data => allPlers(data.teams))
}


//allPlers Secoin
const allPlers = players => {
  console.log(players)
    const loadPlayer = document.getElementById('input_fild').value;
    const palyerList = document.getElementById('palyer_list');
    palyerList.textContent = '';
    if(loadPlayer.value == 0){
        const errorDiv = document.getElementById('erroe');
       errorDiv.innerHTML = `
            <div class="card text-dark bg-warning mb-3"           style="max-width: 18rem;">
            <div class="card-header"></div>
            <div class="card-body">
            <h5 class="card-title">Warning </h5>
            <p class="card-text"></p>
            </div>
       `
    }
    else if(loadPlayer.value != 0){
       
       players.forEach( player => {        
        const div = document.createElement('div');
        div.innerHTML = `
        <div onclick="loadPlayerId('${player.strTeam}')"  class="card" style="cursor: pointer;">
            <img class="w-75 m-4" src="${player.strTeamBadge}" class="card-img-top" alt="...">
            <div class="card-body">
              <h2 class="card-title"> ${player.strTeam}</h2>
              <h3 class="card-title"> ${player.strCountry.slice(0,10)}</h3>
              <button type="button" class="btn btn-primary">Details</button>

            </div>
          </div>
        
        `

        palyerList.appendChild(div);

    });
   } 

}


//loadPlayerId Secoin
const loadPlayerId = playerId =>{
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${playerId}`
    
    fetch(url)
    .then(rep => rep.json())
    .then(data => loadDataDetials(data.player[0]))
    
}


//loadDataDetials Secoin
const loadDataDetials = detals => {
    window.scrollTo(0, 40);
    console.log(detals)
    const playerDetils = document.getElementById('player_Detils');
    playerDetils.textContent = '';
    console.log(detals)
    const div = document.createElement('div');
    div.classList.add('col')

    div.innerHTML = `
    <div class="card mx-auto m-5" style="width: 20rem; height: 555px;">
    <h3 class="card-title m-3">${detals.strPlayer}</h3>
    <img src="${detals.strThumb}" class="card-img-top" alt="">
    <div class="card-body">
      <p class="card-text">${detals.strDescriptionEN.slice(0,100)}</p>
      <a target="_blank" href="https://youtu.be/dTKl0pcC1a4" class="btn btn-primary">Go To Youtub</a>
    </div>
  </div>
    
    `
    playerDetils.appendChild(div);


}

/*---------------------------------------------------------------
        Sports Football Javascript  End               
---------------------------------------------------------------*/