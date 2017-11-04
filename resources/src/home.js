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
    getPosition().then((position) => {

        return position.coords;
    }).then((coords) => {
        let url = new URL("https://geo.example.org/api");
        let params = { lat: coords.latitude, lng: coords.longitude }
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key])); // why does fetch have nothing for qs? Who knows

        fetch('url', {
            method: 'GET'
        })
    }).then((response) => {
        console.log(response);
    });
}


function getPosition(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
}