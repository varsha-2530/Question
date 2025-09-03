import React from 'react'

const GrandChild = ({user}) => {
  return (
    <>
      GrandChild
      <p>
        user:{user.age}
      </p>
      <p>User name:{user.name}</p>
    </>
  )
}

export default GrandChild
