import React from 'react'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
  return (
    <div>
        <ul>
            {names.map((name,index)=>{
                return <li key={index}>{name}</li>
            }
            )}

        </ul>
    </div>
  )
}

export default NameList