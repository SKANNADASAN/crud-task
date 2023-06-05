import React from 'react'
import { useHistory } from 'react-router-dom'

const Base = ({title, Description, children}) => {
  const history = useHistory();
  return (
    <div className='main-component base-component'>
      <button 
      onClick={()=>history.push("/")}
      ><h3>Dashboard</h3></button>
      <button
       onClick={()=>history.push("add")}
      ><h3>Add Users</h3></button>
      <header>
        <h1 className='heading'>{title}</h1>
      </header>

      <main className='main-segment'>
        <h2>{Description}</h2>
        <div>
            {children}
        </div>
      </main>
    </div>
  )
}

export default Base