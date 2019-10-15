import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Login(props) {
    const [creds, setCreds] = React.useState({
        username: '',
        password: ''
    })

    const handleInput = e => {
        setCreds({...creds, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:4000/api/users/login', creds)
            .then(res => {
                console.log(res)
                props.history.push('/')
            })
            .catch(err => {
                console.log('right here', err)
            })
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    name="username"
                    type="text" 
                    onChange={handleInput}
                    value={creds.username}
                />

                <input 
                    name="password"
                    type="password" 
                    onChange={handleInput}
                    value={creds.password}
                />
                <button type="submit">Login</button>
            </form>

            <Link to="/register">Not a user? Register</Link>
        </div>
    )
}