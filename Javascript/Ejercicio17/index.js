let map, marker

function initMap(){
    const position = {
        lat: -25.363,
        lng: 131.044
    }

    const position2 = {
        lat: -50,
        lng: 100
    }

    const position3 = {
        lat: 15,
        lng: 32
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

    marker2 = new google.maps.Marker({
        position: position2,
        map,
        title: "Initial Position"
    })
    marker3 = new google.maps.Marker({
        position: position3,
        map,
        title: "Initial Position"
    })
}