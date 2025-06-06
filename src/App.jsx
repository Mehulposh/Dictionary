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
        
        if(input.trim() !== ''){
          const data = await getMeaning(input);
          console.log(data);
          setData(data);
        }else{
          alert('empty input');
        }
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
    <div className='App'>
      <h1>Dictionary</h1>
      <div className='searchBar'>
        <input 
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required

        />
        <button onClick={handleSearch} disabled = {!input}> 
          Search
        </button>
      </div>
      {loading ? (
        <p> Loading ...</p>
      ) : null}

      <div className='list'>
      {!loading && data.map(item => (
        <ul>
          {item.definitions.map((def,idx) => (
            <li key={idx+1}>
              {def.definition}
            </li>
          ))}
        </ul>
      ))}
      </div>
    </div>
  )
  
}

export default App
