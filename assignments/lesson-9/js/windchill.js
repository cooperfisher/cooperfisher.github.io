function avgTemp() {
    let highTemp = parseFloat(document.getElementById('highTemp').innerHTML);
    let lowTemp = parseFloat(document.getElementById('lowTemp').innerHTML);
    let averageTemp = (highTemp + lowTemp) / 2;
    document.getElementById('output').innerHTML = averageTemp + '&deg;';
    return averageTemp;
}

function windChill() {
    let t = avgTemp();
    let s = parseFloat(document.getElementById('windSpeed').innerHTML);
    let f = 35.74 + ((0.6215)*t) - (35.75 * (Math.pow(s, 0.16))) + (0.4275 * t * (Math.pow(s, 0.16)))
    f = f.toFixed(0);
    document.getElementById('output').innerHTML = f + '&deg;';
}


//* f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16 *//