import React from 'react'

function Greeting(props) {
  return (
    <div>
        {props.isLoggedIn ?
        <h2>Welcome Back, Developer</h2> :
        <h2>Please SignUp!</h2>}
    </div>
  )
}

export default Greeting