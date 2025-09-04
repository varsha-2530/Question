import React from 'react'
import Parent from './Components/Parent'
import { UserProvider } from './Context/UserContext'

const App = () => {
  return (
    <UserProvider>
      <Parent/>
    </UserProvider>
  )
}

export default App
