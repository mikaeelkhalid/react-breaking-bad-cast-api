import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import axios from 'axios';
import CharacterGrid from './components/CharacterGrid';
import SearchCharacter from './components/SearchCharacter'

const App = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      
      setData(res.data)
      setIsLoading(false)

    }
    fetchData()
  }, [query])

  return (
    <div className="container">
      <Header />
      <SearchCharacter getQuery={ q => setQuery(q) } />
      <CharacterGrid isLoading={isLoading} data={data} />
    </div>
  );
}

export default App;
