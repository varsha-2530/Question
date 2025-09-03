import React, { useState } from 'react'
// import Counter from './components/Counter'
// import Timer from './components/Timer'
import Parent from './components/Parent'

const App = () => {
  const [user] = useState({name:"varsha", age:20})
  return (
    <>
    <Parent user={user}/>
      {/* <Counter/> */}
      {/* <Timer/> */}
    </>
  )
}

export default App
