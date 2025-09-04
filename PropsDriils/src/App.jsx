import React, { useState } from 'react'
import Parent from './Components/Parent'

const App = () => {
  const [user] = useState({
    name:"varsha",
    aage:20
  })
  return (
    <div>
      <Parent user={user}/>
    </div>
  )
}

export default App
