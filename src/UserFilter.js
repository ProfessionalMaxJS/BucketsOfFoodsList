// import {useState} from "react";

function UserFilter({list,setSelectedUser}){

   // const [buttonsList, setButtonsList] = useState([])

   function handleClick(e){
       setSelectedUser(e.target.name)
    }
    let userNames = [];
   //  userNames = lists.map((list) => {if (!(userNames.includes(list.user))) {return list.user}})
    
   for(let i=0; i<lists.length; i++)
   {if (userNames.includes(lists[i].user))
      {console.log(userNames)}
   else
   {  userNames.push(lists[i].user)
      console.log(userNames)}  
   }   
    
   const userButtons = userNames.map(userName=> 
      {console.log(userName);
      return <button key={userName} name={userName} onClick={handleClick}>{userName}</button>})

    return( 
userButtons
 )
}
export default UserFilter;