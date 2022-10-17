import React, {useContext} from 'react'
import {CounterContext} from '../App'

function ComponentA() {

    const countContext = useContext(countContext)
  return (
    <div>
        ComponentA
    </div>
  )
}

export default ComponentA