const {getCharacters} = require ('./services')

const option = process.argv[2];
const id = process.argv[3];


getCharacters()
    .then(function(response){
        console.log(response.data)
    })
