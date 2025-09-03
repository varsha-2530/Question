import React from 'react'
import GrandChild from './GrandChild'

const Child = ({user}) => {
  return (
    <>
      hello
      <br />
      <GrandChild user={user}/>
    </>
  )
}

export default Child
