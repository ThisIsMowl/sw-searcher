import React from 'react'

const HelloWorld = (props) => {
  if (props.working) {
    return (
      <h1>Hello World</h1>
    )
  } else return null
}

export default HelloWorld