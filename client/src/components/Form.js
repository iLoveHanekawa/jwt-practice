import React from 'react'

export default function Form() {
    return <div style = {{
        height: '60vh', 
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <form style = {{
            height: '20rem',
            width: '20rem',
            padding: '2rem',
            boxShadow: '0px 0px 8px black',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '0.5rem',
        }}>
            <h1 style = {{
                alignSelf: 'center'
            }}>Login / Register</h1>
            <label htmlFor = 'username'>Username</label>
            <input style = {{
                marginTop: '0.5rem',
                textIndent: '1rem',
                borderRadius: '0.2rem',
                border: 'none',  
                height: '1.5rem',
            }} type = 'text' id = 'username'/>
            <label style = {{
                marginTop: '0.5rem'
            }} htmlFor = 'password'>Password</label>
            <input style = {{
                border: 'none',
                height: '1.5rem',
                textIndent: '1rem',
                marginTop: '0.5rem',
                borderRadius: '0.2rem'
            }} type = 'password' id = 'password'/>
            <br/>
            <button style = {{
                backgroundColor: 'blue',
                width: '100%',
                borderRadius: '0.3rem',
                height: '2rem',
                border: 'none',
                color: 'white',
                alignSelf: 'center'
            }}>Submit</button>
        </form>
    </div>
}