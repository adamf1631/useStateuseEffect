import React, { useState, useEffect } from 'react';

const Colors = () => {

  const [color, setColor] = useState('')

  useEffect(() => {
    console.log('Color was changed.')
  }, [color])


  return (
    <div>
      <h4>
        Colors
      </h4>
      <button onClick={() => setColor('Blue')} className="btn btn-primary m-2">Blue</button>
      <button onClick={() => setColor('Green')} className="btn btn-success m-2">Green</button>
      <button onClick={() => setColor('Red')} className="btn btn-danger m-2">Red</button>
      <h3>
        {color}
      </h3>
    </div>
  )
}

export default Colors
