import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

const GrandChild = () => {
    const user = useContext(UserContext)
  return (
    <div>
      GrandChild
      <p>Name: {user.name}</p>
      <h3>age:user.age</h3>
    </div>
  )
}

export default GrandChild
