// install axios to call external services
import axios from "axios";

// Make a request for a user with a given ID
axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(function (response) {
        // handle success
        console.log("Success!!");
        console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log("Error!!");
        console.log(error);
    })
    .then(function () {
        // always executed
    });
