import React, {useContext} from 'react'
// import ComponentF from './ComponentF'
import {UserContext, ChannelContext} from '../App'


// useContext is a hook that allows us to use context in functional components
function ComponentE() {
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)

  return (
    <div>
       {user} - {channel}
    </div>
  )
}

export default ComponentE