    var franklin = document.querySelector('article.franklin');
    var greenville = document.querySelector('article.greenville');
    var springfield = document.querySelector('article.springfield');

    var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
    var townData = request.response;
    town(townData);
        
    
    function town(jsonObj) {
        var town = townData['towns'];
        
        for (var i = 0; i < town.length; i++) {
            if (i == 2) {continue;}
            var myArticle = document.createElement('article');
            var myH3 = document.createElement('h3');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            
            myH3.textContent = town[i].name;
            myPara1.textContent = 'Motto: ' + town[i].motto;
            myPara2.textContent = 'Year Founded: ' + town[i].yearFounded;
            myPara3.textContent = 'Current Population: ' + town[i].currentPopulation;
            myPara4.textContent = 'Average Rainfall: ' + town[i].averageRainfall + " in";
            
            myArticle.appendChild(myH3);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            
            if (town[i].name == "Franklin") {
                franklin.appendChild(myArticle);
            } else if (town[i].name == "Greenville") {
                greenville.appendChild(myArticle);
            } else if (town[i].name == "Springfield") {
                springfield.appendChild(myArticle);
            }
        }
    }
    }


/*
var output = document.querySelector('article');

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
        if (cities[i].name == 'Placerton') i++;
        
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
        
        myH3.textContent = town[i].name;
        myPara1.textContent = 'Motto: ' + town[i].motto;
        myPara2.textContent = 'Year Founded: ' + town[i].yearFounded;
        myPara3.textContent = 'Current Population: ' + town[i].currentPopulation;
        myPara4.textContent = 'Average Rainfall: ' + town[i].averageRainfall + " in";
        
            output.appendChild(city);
            output.appendChild(motto);
            output.appendChild(year);
            output.appendChild(pop);
            output.appendChild(rainfall);
            
        }
    
            
}
*/