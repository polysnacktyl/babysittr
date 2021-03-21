// mapQuestApi = '8kMgrQJseESEni1XetBPHUm2Ogcgj9Ii';

// variables for places buttons 

var restaurantBtn = document.getElementById('restaurants')
var aquariumBtn = document.getElementById('aquariums')
var iceCreamBtn = document.getElementById('iceCream')
var bowlingBtn = document.getElementById('bowling')
var poolsBtn = document.getElementById('pools')
var amusementBtn = document.getElementById('amusementParks')

// call place functions based on users location
function restaurants() {
    var restaurantsUrl = 'https://www.mapquestapi.com/search/v2/radius?origin=' + place + '&radius=25&maxMatches=3&ambiguities=ignore&hostedData=mqap.ntpois%7Cgroup_sic_code=?%7C581208&outFormat=json&key=8kMgrQJseESEni1XetBPHUm2Ogcgj9Ii'
    fetch(restaurantsUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.searchResults.length; i++) {
                console.log(data.searchResults[i].name)
                var boxRestaurant = document.createElement("span")
                boxRestaurant.textContent = (data.searchResults[i].name)
                $(boxRestaurant).addClass("button is-multiline is-light draggable");
                sidebar.appendChild(boxRestaurant);
                $(function () {
                    $(".draggable").draggable();
                    $(".droppable").droppable({
                    });
                });
            }
            console.log("-----------------")
        })

    console.log(restaurantsUrl);
}
function aquariums() {
    var aquariumsUrl = 'https://www.mapquestapi.com/search/v2/radius?origin=' + place + '&radius=25&maxMatches=3&ambiguities=ignore&hostedData=mqap.ntpois%7Cgroup_sic_code=?%7C842205&outFormat=json&key=8kMgrQJseESEni1XetBPHUm2Ogcgj9Ii'
    fetch(aquariumsUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.searchResults.length; i++) {
                console.log(data.searchResults[i].name)
                var boxAquarium = document.createElement("span")
                boxAquarium.textContent = (data.searchResults[i].name)
                $(boxAquarium).addClass("button is-multiline is-light draggable");
                sidebar.appendChild(boxAquarium);
                $(function () {
                    $(".draggable").draggable();
                    $(".droppable").droppable({
                    });
                });
            }
            console.log("-----------------")
        })
    console.log(aquariumsUrl);
}
function iceCream() {
    var iceCreamUrl = 'https://www.mapquestapi.com/search/v2/radius?origin=' + place + '&radius=25&maxMatches=3&ambiguities=ignore&hostedData=mqap.ntpois%7Cgroup_sic_code=?%7C581203&outFormat=json&key=8kMgrQJseESEni1XetBPHUm2Ogcgj9Ii'
    fetch(iceCreamUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.searchResults.length; i++) {
                console.log(data.searchResults[i].name)
                var boxIceCream = document.createElement("span")
                boxIceCream.textContent = (data.searchResults[i].name)
                $(boxIceCream).addClass("button is-multiline is-light draggable");
                sidebar.appendChild(boxIceCream);
                $(function () {
                    $(".draggable").draggable();
                    $(".droppable").droppable({
                    });
                });
            }
            console.log("-----------------")
        })
    console.log(iceCreamUrl);
}
function bowling() {
    var bowlingUrl = 'https://www.mapquestapi.com/search/v2/radius?origin=' + place + '&radius=25&maxMatches=3&ambiguities=ignore&hostedData=mqap.ntpois%7Cgroup_sic_code=?%7C793301&outFormat=json&key=8kMgrQJseESEni1XetBPHUm2Ogcgj9Ii'
    fetch(bowlingUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.searchResults.length; i++) {
                console.log(data.searchResults[i].name)
                var boxBowling = document.createElement("span")
                boxBowling.textContent = (data.searchResults[i].name)
                $(boxBowling).addClass("button is-multiline is-light draggable");
                sidebar.appendChild(boxBowling)
                $(function () {
                    $(".draggable").draggable();
                    $(".droppable").droppable({
                    });
                });
            }
            console.log("-----------------")
        })
    console.log(bowlingUrl);
}
function pools() {
    var poolsUrl = 'https://www.mapquestapi.com/search/v2/radius?origin=' + place + '&radius=25&maxMatches=3&ambiguities=ignore&hostedData=mqap.ntpois%7Cgroup_sic_code=?%7C799969&outFormat=json&key=8kMgrQJseESEni1XetBPHUm2Ogcgj9Ii'
    fetch(poolsUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.searchResults.length; i++) {
                console.log(data.searchResults[i].name)
                var boxPools = document.createElement("span")
                boxPools.textContent = (data.searchResults[i].name)
                $(boxPools).addClass("button is-multiline is-light draggable");
                sidebar.appendChild(boxPools);
                $(function () {
                    $(".draggable").draggable();
                    $(".droppable").droppable({
                    });
                });
            }
            console.log("-----------------")
        })
    console.log(poolsUrl);
}
function amusementPark() {
    var amusementParkUrl = 'https://www.mapquestapi.com/search/v2/radius?origin=' + place + '&radius=50&maxMatches=3&ambiguities=ignore&hostedData=mqap.ntpois%7Cgroup_sic_code=?%7C799604&outFormat=json&key=8kMgrQJseESEni1XetBPHUm2Ogcgj9Ii'
    fetch(amusementParkUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.searchResults.length; i++) {
                console.log(data.searchResults[i].name)
                var boxAmusParks = document.createElement("span")
                boxAmusParks.textContent = (data.searchResults[i].name)
                $(boxAmusParks).addClass("button is-multiline is-light draggable");
                sidebar.appendChild(boxAmusParks);
                $(function () {
                    $(".draggable").draggable();
                    $(".droppable").droppable({
                    });
                });
            }
            console.log("-----------------")
        })
    console.log(amusementParkUrl);
}






$(document).ready(function () {
    $("#modal").addClass("is-active");
    $("#enter-btn").click(function () {
        $("#modal").removeClass("is-active");
        populate();
    });
});

//Function to display running clock
var currentDay = moment().format('dddd') + " " + moment().format("D MMMM YYYY");
var currentTime = moment().format('hh:mm:ss a');

var interval = setInterval(function () {
    var timeNow = moment();
    $('#clock').html(timeNow.format('YYYY MMMM DD') + ' '
        + timeNow.format('dddd')
            .substring(0, 3).toUpperCase());
    $('#clock').html(currentDay + " " + timeNow.format('hh:mm:ss A'));
}, 1000);

// dynamically generated schedule based on modal input
var hours;
var place;
var sitter;

var container = document.getElementById("main-container");
var sched = document.createElement("div");

$(sched).addClass("box droppable");

container.appendChild(sched);

function populate() {
    hours = $("#time").val();
    place = $("#loc").val();
    sitter = $("#babysitter").val();

    console.log(hours);
    console.log(place);
    console.log(sitter);
    for (i = 0; i < hours; i++) {
        var timeblock = document.createElement("div")
        $(timeblock).addClass("columns")
        sched.appendChild(timeblock);

        var time = document.createElement("div");
        $(time).addClass("column is-1 hourblock schedblock");
        timeblock.appendChild(time);

        var block = document.createElement("div");
        $(block).addClass("column schedblock");
        timeblock.appendChild(block);

        // populate time blocks with each hour, starting when form info is entered
        var hourBlockCol = document.getElementsByClassName("hourblock")

        hourBlockCol[0].textContent = moment().format("h:mm");

        for (var h = 1; h < hourBlockCol.length; h++) {
            hourBlockCol[h].textContent = moment().add(h, "hour").format("h:mm");
        }
    }

    // weather api call with place pulled from modal
    place = $("#loc").val();
    var api = "http://api.weatherapi.com/v1/current.json?key=02957dd1b8bc47448a7215119211803&q=" + place + "&aqi=no";
    var weatherClouds = [1006, 1135, 1003, 1009];
    var weatherRains = [1030, 1063, 1087, 1150, 1153, 1180, 1183, 1186, 1189];
    var weatherDangerRains = [1192, 1195, 1240, 1243, 1246, 1273, 1276];
    var weatherFreezingRains = [1069, 1072, 1168, 1171, 1198, 1201, 1204, 1207, 1249, 1252]
    var weatherSnows = [1066, 1210, 1213];
    var weatherDangerSnows = [1216, 1219, 1222, 1225, 1237, 1255, 1258, 1261, 1264, 1279, 1282, 1114, 1117, 1147];
    //weather icons from https://www.weatherapi.com/docs/

    function call() {
        fetch(api)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                if (data.current.condition.text == 'Sunny') {
                    var sunny = document.createElement('p');
                    var sunnyIcon = document.createElement('img');
                    var sunnyAdvice = "Why not go play outside? Don't forget the sunscreen!";
                    sunnyIcon.src = "./assets/images/weather-icons/sunny.png";
                    sunny.textContent = data.location.name + ': ' + data.current.temp_f + '°, ' + data.current.condition.text + '.';
                    document.getElementById('weather').append(sunnyIcon);
                    document.getElementById('weather').append(sunny, sunnyAdvice);

                };

                if (data.current.condition.text == 'Clear') {
                    var clear = document.createElement('p');
                    var clearIcon = document.createElement('img');
                    var clearAdvice = "";
                    clearIcon.src = "./assets/images/weather-icons/clearnight.png";
                    clear.textContent = data.location.name + ': ' + data.current.temp_f + '°, ' + data.current.condition.text + '.';
                    document.getElementById('weather').append(clearIcon);
                    document.getElementById('weather').append(clear, clearAdvice);

                };

                if (weatherClouds.includes(data.current.condition.code)) {
                    var clouds = document.createElement('p');
                    var cloudsIcon = document.createElement('img');
                    var cloudsAdvice = "";
                    cloudsIcon.src = "./assets/images/weather-icons/clouds.png";
                    clouds.textContent = data.location.name + ': ' + data.current.temp_f + '°, ' + data.current.condition.text + '.';
                    document.getElementById('weather').append(cloudsIcon);
                    document.getElementById('weather').append(clouds, cloudsAdvice);

                };

                if (weatherRains.includes(data.current.condition.code)) {
                    var rains = document.createElement('p');
                    var rainIcon = document.createElement('img')
                    var rainsAdvice = "time to stomp some puddles! don't forget boots and an umbrella!";
                    rainIcon.src = "./assets/images/weather-icons/rain.png"
                    rains.textContent = data.location.name + ', ' + data.current.temp_f + '°, ' + data.current.condition.text + '.';
                    document.getElementById('weather').append(rainIcon);
                    document.getElementById('weather').append(rains, rainsAdvice);

                };

                if (weatherDangerRains.includes(data.current.condition.code)) {
                    var dangerRains = document.createElement('p');
                    var stormIcon = document.createElement('img')
                    var dangerRainsAdvice = "hazardous wet conditions--play some inside games today";
                    stormIcon.src = "./assets/images/weather-icons/storm.png"
                    dangerRains.textContent = data.location.name + ', ' + data.current.temp_f + '°, ' + data.current.condition.text + '.';
                    document.getElementById('weather').append(stormIcon);
                    document.getElementById('weather').append(dangerRains, dangerRainsAdvice);

                };

                if (weatherFreezingRains.includes(data.current.condition.code)) {
                    var freezyRains = document.createElement('p');
                    var snowRainIcon = document.createElement('img')
                    var freezyRainsAdvice = "it's freezing and wet outside today--be careful!";
                    stormIcon.src = "./assets/images/weather-icons/snowandrain.png"
                    freezyRains.textContent = data.location.name + ', ' + data.current.temp_f + '°, ' + data.current.condition.text + '.';
                    document.getElementById('weather').append(snowRainIcon);
                    document.getElementById('weather').append(freezyRains, freezyRainsAdvice);

                };

                if (weatherSnows.includes(data.current.condition.code)) {
                    var snow = document.createElement('p');
                    var snowIcon = document.createElement('img')
                    var snowAdvice = "it's snowy out today, so bundle up and don't forget your mittens!";
                    stormIcon.src = "./assets/images/weather-icons/snow.png"
                    snows.textContent = data.location.name + ', ' + data.current.temp_f + '°, ' + data.current.condition.text + '.';
                    document.getElementById('weather').append(snowIcon);
                    document.getElementById('weather').append(snow, snowAdvice);

                };

                if (weatherDangerSnows.includes(data.current.condition.code)) {
                    var dangerSnows = document.createElement('p');
                    var dangerSnowsIcon = document.createElement('img')
                    var dangerSnowsAdvice = "today would be a great day for staying home and making hot cocoa";
                    stormIcon.src = "./assets/images/weather-icons/snowstorm.png"
                    snows.textContent = data.location.name + ', ' + data.current.temp_f + '°, ' + data.current.condition.text + '.';
                    document.getElementById('weather').append(dangerSnowsIcon);
                    document.getElementById('weather').append(dangerSnows, dangerSnowsAdvice);
                };


            });


    }
    call()
}
populate()


// button click events to fire off place functions

restaurantBtn.addEventListener('click', restaurants);
aquariumBtn.addEventListener('click', aquariums);
iceCreamBtn.addEventListener('click', iceCream);
bowlingBtn.addEventListener('click', bowling);
poolsBtn.addEventListener('click', pools);
amusementBtn.addEventListener('click', amusementPark);

// sidebar with drag/drop boxes

var sidebar = document.createElement("div");

$(sidebar).addClass("has-background-dark container sidebar");
sched.appendChild(sidebar);

var boxS = document.createElement("span");
var boxM = document.createElement("span");
var boxR = document.createElement("span");
var boxN = document.createElement("span");
var boxW = document.createElement("span");

boxS.textContent = "ate (snack)";
boxM.textContent = "ate (meal)";
boxR.textContent = "read together";
boxN.textContent = "nap";
boxW.textContent = "took walk"

$(boxS).addClass("button is-light draggable");
$(boxM).addClass("button is-light draggable");
$(boxR).addClass("button is-light draggable");
$(boxN).addClass("button is-light draggable");
$(boxW).addClass("button is-light draggable");

sidebar.appendChild(boxS);
sidebar.appendChild(boxM);
sidebar.appendChild(boxR);
sidebar.appendChild(boxN);
sidebar.appendChild(boxW);

$(function () {
    $(".draggable").draggable();
    $(".droppable").droppable({
    });
});

