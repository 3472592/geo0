function getMyLocation() { // checking if browser supports Geolocation API, if navigator.geolocation object exist we get result
    if (navigator.geolocation) {
        //if it does call getCurrentPosition method and pass handler function displayLocation
        navigator.geolocation.getCurrentPosition(displayLocation);
    } else {
        alert("No Geolocation Support!")
    }
}
//handler which gets called when browser has the location
function displayLocation(position) { //getCurrent Position method is passed position
    var latitude = position.coords.latitude; // getting lat long from position.coords object
    var longitude = position.coords.longitude;

    var div = document.getElementById("location");
    //grabbing and setting our html
    div.innerHTML = "You are at Latitude: " + latitude + " Longitude: " + longitude;
}
window.onload = getMyLocation; // calls function when the page loads