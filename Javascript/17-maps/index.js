let marker, map

function initMap(){
    // console.log("Starting Map");
    const position = {
        lat: -25.363,
        lng: 131.044
    }

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: position
    })

    marker = new google.maps.Marker({
        position: position,
        map,
        title: "Initial Position"
    })

    //first obtain geolocation
    geoPosition()
}

function geoPosition(){
    if (navigator.geolocation){
        const geoLoc = navigator.geolocation
        const options = {timeout: 60000}
        const watchPos = geoLoc.watchPosition(centerMap, onError, options)
    } else {
        alert("Your browser does not admit Geolocation")
    }
}


function centerMap(position){
    const newPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    console.log(newPos)
    marker.setPosition(newPos)
    map.setCenter(newPos)
}

function onError(error){
    console.log("An error has occured and we have fixed it")
    console.error(error)
}