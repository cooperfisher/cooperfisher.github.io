var output = document.querySelector('section');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var townData = request.response;
    var cities = townData['towns'];
    for (var i = 0; i < cities.length; i++)
        {
        var myArticle = document.createElement('article');
            
        var city = document.createElement('h3');
        city.textContent = cities[i].name + ' City';
            
        var motto = document.createElement('p');
        motto.textContent = '"' + cities[i].motto + '"';
        
        var year = document.createElement('p');
        year.textContent = 'Founded: ' + cities[i].yearFounded;
        
        var pop = document.createElement('p');
        pop.textContent = 'Population: ' + cities[i].currentPopulation;
            
        var rainfall = document.createElement('p');
        rainfall.textContent = 'Annual Rainfall: ' + cities[i].averageRainfall;
        
            output.appendChild(city);
            output.appendChild(motto);
            output.appendChild(year);
            output.appendChild(pop);
            output.appendChild(rainfall);
        }
    
            
}

/*
function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['squadName'];
  //document.getElementById("pageheader").innerHTML = jsonObj['squadName'];
  h.appendChild(myH1);

  var myPara = document.createElement('p');
  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  h.appendChild(myPara);
}

function showHeroes(jsonObj) {
  var heroes = jsonObj['members'];
      
  for (var i = 0; i < heroes.length; i++) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myList = document.createElement('ul');

    myH2.textContent = heroes[i].name;
    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    myPara2.textContent = 'Age: ' + heroes[i].age;
    myPara3.textContent = 'Superpowers:';
        
    var superPowers = heroes[i].powers;
    for (var j = 0; j < superPowers.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    s.appendChild(myArticle);
  }
}
*/