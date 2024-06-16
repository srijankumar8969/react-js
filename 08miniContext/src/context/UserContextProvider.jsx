import React, {useState} from 'react'
import UserContext from './UserContext'

const UserContextProvider= ({children}) => {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{user, setUser}}>  //user aur setuser dono pass kar diya taki agar values set karni hai ya //value ke ander is tarike se object ke form me hum variables daal dete hai jo ki use kiye ja sakte hain //ek baat yaad rakhna ki aap ek bari me context provide karte waqt hi sare variables ko declare  nahi kar pao ge as yo proceedd into the project you get the idea that wwhat things need to get added to context and what not// we add things to cintext so that they can be accssed at different places
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;
