mapQuestApi = '8kMgrQJseESEni1XetBPHUm2Ogcgj9Ii';
function restaurants() {
    var restaurantsUrl = 'https://www.mapquestapi.com/search/v2/radius?origin=39.8523,+-75.0679&radius=25&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois%7Cgroup_sic_code=?%7C581208&outFormat=json&key=8kMgrQJseESEni1XetBPHUm2Ogcgj9Ii'
    fetch(restaurantsUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.searchResults.length; i++) {
                console.log(data.searchResults[i].name)
            }
            console.log("-----------------")
        })
    console.log(restaurantsUrl);
}
function aquariums() {
    var aquariumsUrl = 'https://www.mapquestapi.com/search/v2/radius?origin=39.8523,+-75.0679&radius=25&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois%7Cgroup_sic_code=?%7C842205&outFormat=json&key=8kMgrQJseESEni1XetBPHUm2Ogcgj9Ii'
    fetch(aquariumsUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.searchResults.length; i++) {
                console.log(data.searchResults[i].name)
            }
            console.log("-----------------")
        })
    console.log(aquariumsUrl);
}
function iceCream() {
    var iceCreamUrl = 'https://www.mapquestapi.com/search/v2/radius?origin=39.8523,+-75.0679&radius=25&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois%7Cgroup_sic_code=?%7C581203&outFormat=json&key=8kMgrQJseESEni1XetBPHUm2Ogcgj9Ii'
    fetch(iceCreamUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.searchResults.length; i++) {
                console.log(data.searchResults[i].name)
            }
            console.log("-----------------")
        })
    console.log(iceCreamUrl);
}
function bowling() {
    var bowlingUrl = 'https://www.mapquestapi.com/search/v2/radius?origin=39.8523,+-75.0679&radius=25&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois%7Cgroup_sic_code=?%7C793301&outFormat=json&key=8kMgrQJseESEni1XetBPHUm2Ogcgj9Ii'
    fetch(bowlingUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.searchResults.length; i++) {
                console.log(data.searchResults[i].name)
            }
            console.log("-----------------")
        })
    console.log(bowlingUrl);
}
function pools() {
    var poolsUrl = 'https://www.mapquestapi.com/search/v2/radius?origin=39.8523,+-75.0679&radius=25&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois%7Cgroup_sic_code=?%7C799969&outFormat=json&key=8kMgrQJseESEni1XetBPHUm2Ogcgj9Ii'
    fetch(poolsUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.searchResults.length; i++) {
                console.log(data.searchResults[i].name)
            }
            console.log("-----------------")
        })
    console.log(poolsUrl);
}
function amusementPark() {
    var amusementParkUrl = 'https://www.mapquestapi.com/search/v2/radius?origin=39.8523,+-75.0679&radius=50&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois%7Cgroup_sic_code=?%7C799604&outFormat=json&key=8kMgrQJseESEni1XetBPHUm2Ogcgj9Ii'
    fetch(amusementParkUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.searchResults.length; i++) {
                console.log(data.searchResults[i].name)
            }
            console.log("-----------------")
        })
    console.log(amusementParkUrl);
}
restaurants()
aquariums()
iceCream()
bowling()
pools()
amusementPark()
// $('').onclick(restaurants())
$(document).ready(function () {
    $("#modal").addClass("is-active");
    $("#enter-btn").click(function () {
        $("#modal").removeClass("is-active");
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