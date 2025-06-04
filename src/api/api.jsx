import axios from 'axios';

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

async function getMeaning(word){
    try{
        const response = await axios.get(`${url}${word}`);
        return(response.data[0].meanings);
    }catch(err){
        console.error(err);
        return [];
    }
}

export default getMeaning;