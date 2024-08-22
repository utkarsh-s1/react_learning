import UserContext from "./usercontext";
import {useState} from 'react'
function UserProvider({children}){

    const [data,setData] = useState({})
    return (
    <UserContext.Provider value={{data, setData}} >

    {children}
    </UserContext.Provider>
    )

}
export default UserProvider