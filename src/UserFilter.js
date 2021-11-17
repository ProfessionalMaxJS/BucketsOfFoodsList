// import {useState} from "react";

function UserFilter({list,setSelectedUser}){

   // const [buttonsList, setButtonsList] = useState([])

   function handleClick(e){
       setSelectedUser(e.target.name)
    }
    let userNames = [];
   //  userNames = list.map((list) => {if (!(userNames.includes(list.user))) {return list.user}})
    
   for(let i=0; i<list.length; i++)
   {if (userNames.includes(list[i].user))
      {console.log(userNames)}
   else
   {  userNames.push(list[i].user)
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