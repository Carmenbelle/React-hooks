import React, {useState} from 'react'
import HoMouse from './HoMouse'

function MouseContainer() {

    const [display, setDisplay] = useState(true)
    
  return (
    <div>
        <button onClick={() => setDisplay(!display)}> Toggle display</button>
        {display && <HoMouse />}
    </div>
  )
}

export default MouseContainer