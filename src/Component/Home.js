import axios from 'axios';
import React from 'react'

function Home() {
    const res =  axios.get('https://localhost:7214/api/Users');
  return (
    <div>
      {JSON.parse(res)}
    </div>
  )
}

export default Home
