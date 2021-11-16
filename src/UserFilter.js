import {useState} from "react";

function UserFilter({lists,setSelectedUser}){

   const [buttonsList, setButtonsList] = useState([])

   function handleClick(e){
       setSelectedUser(e.target.innerText)
    }
    const userList = lists.map((list) => <button onClick={handleClick}>{list.user}</button>)

    return( 

    userList
 )
}
export default UserFilter;