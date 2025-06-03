import axios from 'axios';

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

async function getMeaning(word){
    try{
        const response = await axios.get(`${url}${word}`);
        console.log(response);
    }catch(err){
        console.error(err);
    }
}

export default getMeaning;