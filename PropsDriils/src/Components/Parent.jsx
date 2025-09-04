import React from 'react'
import Child from './Child'

const Parent = ({user}) => {
  return (
    <div>
      Parent
      <Child user={user}/>
    </div>
  )
}

export default Parent
