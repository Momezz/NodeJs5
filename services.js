
const axios = require('axios');
let characters = 'https://rickandmortyapi.com/api/character';
function getCharacters(){
    return axios.get(characters);
}

function getEpisodes(){

}

const episodes = 'https://rickandmortyapi.com/api/episode';


module.exports = {
    getCharacters
}

