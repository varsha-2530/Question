import React from 'react'
import Child from './Child'

const Parent = ({user}) => {
  return (
    <>
      hi

<br />
      <Child user={user}/>
    </>
  )
}

export default Parent
