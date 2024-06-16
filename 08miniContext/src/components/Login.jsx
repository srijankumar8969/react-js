import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)  //we get the access of the container we can add or use the data in the container from useContext(contextnmae)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password}) //we add some values to the variable of the container container
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
        {" "}
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
