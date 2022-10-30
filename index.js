//const { default: axios } = require('axios')
const { getEpisodes, getCharacters, getSingleCharacter, getSingleEpisode } = require('./services');

const option = process.argv[2];
const id = process.argv[3];

if (option === 'personajes' && id == undefined) {
    //Llamado al servicio todos los personajes;
    getCharacters();
} else if (option === 'personajes' && !(id == undefined)) {
    //Llamado al servicio personajes por Id;
    getSingleCharacter(id);
} else if (option === 'episodios' && id == undefined) {
    //Llamado al servicio todos los episodios";
    getEpisodes();
} else if (option === 'episodios' && !(id === undefined)) {
    //Llamado al servicio episodios por id;
    getSingleEpisode(id);
}












/*
const option = process.argv[2];
const id = process.argv[3];


getCharacters()
    .then(function(response){
        console.log(response.data)
    })
*/