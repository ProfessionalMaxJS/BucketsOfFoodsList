import styled from "styled-components"
import UserNavBar from "./UserNavBar"

function Recommendations({masterList}){ 

return( 

<StyledUserItem>
   <UserNavBar masterList={masterList}/>
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


