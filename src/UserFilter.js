import styled from "styled-components"

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
   <StyledUserItem>
      <button className="bttn" key={userName} name={userName} onClick={handleClick}>{userName}</button>
   </StyledUserItem>
 ))
}
export default UserFilter;

const StyledUserItem = styled.div`
.bttn{
   padding-top:10px;
   border:black;
   width: 10%;
   border-radius: 10px;
   margin: 10px;
   font-family: monaco;
   display: inline;
   background-color:#326B9D;
   color:#E3BB1C;
   float:right;
}`




