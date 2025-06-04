import {  useState } from 'react'

import './App.css'
import getMeaning from './api/api';

function App() {
  const [data, setData] = useState([]);
  const [input,setInput] = useState('');
  const [loading,setLoading] = useState(false);

  const handleSearch= () => {
      async function fetchData(){
        try{
        setLoading(true)
        const data = await getMeaning(input);
        console.log(data);
        setData(data);
      }
      catch(err){
        console.error(err);
      }
      finally{
        setLoading(false)
      }
    }
    fetchData();
  };


  return(
    <div>

      <div>
        <input 
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}

        />
        <button onClick={handleSearch}> 
          Search
        </button>
      </div>
      {loading ? (
        <p> Loading ...</p>
      ) : null}
      {!loading && data.map(item => (
        <div>
          {item.definitions.map(def => (
            <h3>
              {def.definition}
            </h3>
          ))}
        </div>
      ))}
    </div>
  )
  
}

export default App
