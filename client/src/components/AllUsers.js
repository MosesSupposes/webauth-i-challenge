import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function AllUsers() {
    const [users, setUsers] = React.useState([])

    React.useEffect(() => {
        axios.get('http://localhost:4000/api/users')
        .then(res => setUsers(res.data))
        .catch(err => console.error(err))
    }, [])
    return (
        <div>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
            <ul>
                {users.map((user, i) => <li key={i}>{user.username}</li>)}
            </ul>
        </div>
    )
}