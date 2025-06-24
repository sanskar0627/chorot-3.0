import { useEffect, useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch';

function App() {
  const [currentPost, setCurrentPost] = useState(1);
  const { findData, loading } = useFetch("https://jsonplaceholder.typicode.com/todos/" + currentPost);

  if(loading){
    return<div>
      <h3>Load ho raha hai .....</h3>
      console.log("loading");
      
    </div>
  }
  return (
    <div>
      <button onClick={() => setCurrentPost(1)}>1</button>
      <button onClick={() => setCurrentPost(2)}>2</button>
      <button onClick={() => setCurrentPost(3)}>3</button>
      <div>
        <h3>{findData.title}</h3>
        <p>ID: {findData.id}</p>
      </div>
    </div>

  )
}

export default App