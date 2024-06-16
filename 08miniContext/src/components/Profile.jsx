import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user} = useContext(UserContext)  //we get access of the container //here we are directly using the data in the useContext container provided from anywhere where the access of the container is available.
  if(!user) return <h1>Not logged in </h1>;
  return (
    <div>
        <h1>Profile : {user.username}</h1>
    </div>
  )
}
export default Profile
