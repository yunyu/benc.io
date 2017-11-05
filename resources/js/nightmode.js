// adjust day night thing


const changeBackground = document.getElementsByTagName('body');
const changeColor = colorToChangeElements();

function colorToChangeElements() {
    let icons = document.getElementsByTagName('i');
    let h2 = document.getElementsByTagName('h2');
    let h3 = document.getElementsByTagName('h3');

    return addArrays([icons, h2, h3]);
}

function addArrays(arrays) { // arrays is an array of arrays
    let rtn = [];

    for (let i = 0; i < arrays.length; i++) {
        rtn = rtn.concat(Array.from(arrays[i]));

    }

    return rtn;

}


function makeDay() {

    for (let i = 0; i < changeBackground.length; i++) {
        console.log()
        changeBackground[i].style.backgroundColor = "white";

    }

    for (let i = 0; i < changeColor.length; i++) {
        changeColor[i].style.color = "black";

    }


}

function makeNight() {

    for (let i = 0; i < changeBackground.length; i++) {
        console.log()
        changeBackground[i].style.backgroundColor = "black";

    }

    for (let i = 0; i < changeColor.length; i++) {
        changeColor[i].style.color = "white";

    }


}

function getSunriseSunsetTimes() {

    return fetch("https://freegeoip.net/json/")
        .then((location) => {
            return location.json();
        })
        .then((coords) => {
            let url = new URL("https://api.sunrise-sunset.org/json");
            let params = { lat: coords.latitude, lng: coords.longitude, formatted: 0 }
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key])); // why does fetch have nothing for qs? Who knows

            return fetch(url, {
                method: 'GET'
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            let civilBegin = moment.utc(data.results.civil_twilight_begin).tz(moment.tz.guess());
            let civilEnd = moment.utc(data.results.civil_twilight_end).tz(moment.tz.guess());

            let civilTimes = {
                "begin": civilBegin,
                "end": civilEnd
            }

            return civilTimes;
        });
}


function getPosition(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
}

getSunriseSunsetTimes().then(function(data) {
    let now = moment();
    if (now.isAfter(data.begin) && now.isBefore(data.end)) {
        console.log("It is between: " + data.begin.format("MMMM Do YYYY, h:mm:ss a") + " and " + data.end.format("MMMM Do YYYY, h:mm:ss a"));
        makeDay();
    } else {
        console.log("It is either before " + data.begin.format("MMMM Do YYYY, h:mm:ss a") + " or after " + data.end.format("MMMM Do YYYY, h:mm:ss a"));
        makeNight();
    }
});