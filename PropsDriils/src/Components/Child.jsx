import React from 'react'
import GrandChild from './GrandChild'

const Child = ({user}) => {
  return (
    <div>
      Child
      <GrandChild user={user}/>
    </div>
  )
}

export default Child
