import React from 'react'

function Title(props) {
  return (
    <div key={props.id}>
        {props.title}
    </div>
  )
}

export default Title