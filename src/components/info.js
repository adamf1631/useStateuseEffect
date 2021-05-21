import React, { useState, useEffect } from 'react'

const Info = () => {

  const [resource, setResource] = useState('')
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
    .then(res => res.json())
    .then(res => setState(res))
  }, [resource])

  let data = JSON.stringify(state)


  return (
    <div className='container'>
      <h4>
        Get Our Data
      </h4>
      <div className="container">
      <button onClick={() => setResource('posts')} className="btn btn-primary m-2">Posts</button>
      <button onClick={() => setResource('comments')} className="btn btn-success">Green</button>
      </div>

      <p>
        {data}
      </p>

      
    </div>
  )
}

export default Info;
