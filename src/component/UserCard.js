import React from 'react'

function UserCard(props) {
  return (
    <div>
        <h2>UserCard</h2>
        <p> Name: {props.user.name}</p>
        <button onClick={props.methodName}>Click Me</button>
    </div>
  )
}

export default UserCard