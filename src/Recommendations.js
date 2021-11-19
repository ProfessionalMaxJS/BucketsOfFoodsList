import styled from "styled-components"
import {Link} from "react-router-dom"

function Recommendations({masterList, setList}){
   
let userNames = ["Everyone"];
   
   for(let i=0; i<masterList.length; i++)
   {if (userNames.includes(masterList[i].user))
      {console.log(`rejected repeat creation of ${masterList[i]} button`)}
   else
   {  userNames.push(masterList[i].user)
   console.log(userNames)}  
   }   

return( 

<StyledUserItem>
{userNames.map(userName=><Link to={`/recommendations/${userName}`}><button key={userName}>{`${userName}'s Faves`}</button></Link>)}
</StyledUserItem>

 )
}
export default Recommendations;

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


