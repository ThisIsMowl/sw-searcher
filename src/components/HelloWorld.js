import React from 'react'

const HelloWorld = (props) => {
  if (!props.loading) {
    return (
      <h1>Hello World</h1>
    )
  }
  return (
    <h1>Loading...</h1>
  )
}

export default HelloWorld
