
function setLatLng(lat, lng) {
    localStorage.setItem("homeLng", lng);
    localStorage.setItem("homeLat", lat);
}
function loadStreet() {
    window.location.href = "street.html";
}

function loadMap() {
    window.location.href = "map.html";
}
