import React from 'react'

function Etc() {
  return (
    <div style = {{
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: 'green'
    }}>
        <h1>DashBoard</h1>
        <p>No token present</p>
        <p>Not authorized to access this route</p>
        <button style = {{
            backgroundColor: 'blue',
            width: '25%',
            borderRadius: '0.3rem',
            height: '2rem',
            border: 'none',
            color: 'white',
            alignSelf: 'center'
        }}>Get data</button>
    </div>
  )
}

export default Etc