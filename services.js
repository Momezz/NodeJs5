const axios = require('axios');

async function getCharacters() {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character`);
        const names = response.data.results.map((character) => character.name);
        console.log(names);
    } catch (error) {
        console.error(error);
    }
}

async function getSingleCharacter(character) {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${character}`);
        const names = response.data.name;
        console.log(names);
    } catch (error) {
        console.error(error);
    }
}

async function getSingleEpisode(id) {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
        const episodes = response.data.name;
        console.log(episodes);
    } catch (error) {
        console.error(error);
    }
}

async function getEpisodes() {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/episode`);
        const episodes = response.data.results.map((episode) => episode.name);
        console.log(episodes);
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getCharacters,
    getSingleCharacter,
    getEpisodes,
    getSingleEpisode
}

