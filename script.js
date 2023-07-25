// TODO: add code here
window.addEventListener("load", function(){

    fetch( "https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        return response.json();
    }).then(function(response){
        let astroSorted = response.sort(function(a,b){
            return b.hoursInSpace - a.hoursInSpace
        })
        let astroContainer = document.getElementById('container');
        let astroCrewHTML = '';
        let astroCount = 0;
        
        for (let i = 0; i < astroSorted.length; i++) {
          let active = "";
          if (astroSorted[i].active) {
            {
              active = 'style = "color:green"';
            }
          }
          let astroHTML = `
            
            <div class="astronaut">
                <div class="bio">
                    <h3>${astroSorted[i].firstName} ${
            astroSorted[i].lastName
          }</h3>
                    <ul>
                        <li>Hours in space: ${astroSorted[i].hoursInSpace}</li>
                        <li ${active}>Active: ${astroSorted[i].active}</li>
                        <li>Skills:${astroSorted[i].skills.join(", ")}</li>
                    </ul>
                </div>
            <img class="avatar" src="${astroSorted[i].picture}">
            </div>
            `;
          astroCount++;
          astroCrewHTML += astroHTML;
        }
        astroContainer.innerHTML += `<div> ${astroCount} </div>`
        astroContainer.innerHTML +=astroCrewHTML;
    })
    






})