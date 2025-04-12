import React from 'react'

function Welcome(props) {
    console.log(props);
    
  return (
    <div>Welcome {props.name}
        {props.list.map((name,index) =>{
            return <h1 key={index}>{name}</h1>
        })}
    </div>
  )
}

export default Welcome