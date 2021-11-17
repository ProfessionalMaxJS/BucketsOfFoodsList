import {useState} from "react";

function UserFilter({list,setSelectedUser}){

   const [buttonsList, setButtonsList] = useState([])

   function handleClick(e){
       setSelectedUser(e.target.innerText)
    }
    const userList = list.map((listItem) => <button onClick={handleClick}>{listItem.user}</button>)

    return( 

    userList
 )
}
export default UserFilter;