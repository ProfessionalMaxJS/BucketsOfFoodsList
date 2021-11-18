import {useState} from "react";

function UserFilter({masterList, setList}){
   
   let userNames = ["Everyone"];
   
   for(let i=0; i<masterList.length; i++)
   {if (userNames.includes(masterList[i].user))
      {console.log(`rejected repeat creation of ${masterList[i]} button`)}
      else
      {  userNames.push(masterList[i].user)
         console.log(userNames)}  
      }   

const [selectedUser,setSelectedUser] = useState("")

function handleClick(e){
   setSelectedUser(e.target.name)
   
   setList(masterList.filter((list) => {return e.target.name==="Everyone" || list.user===e.target.name}))
}

return( 
userNames.map(userName=> 
      <button key={userName} name={userName} onClick={handleClick}>{userName}</button>
 ))
}
export default UserFilter;