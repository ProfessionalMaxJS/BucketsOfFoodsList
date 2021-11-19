import {Link} from "react-router-dom"
import styled from "styled-components"

function UserNavBar({masterList}){

let userNames = [];

for(let i=0; i<masterList.length; i++)
    {   if (userNames.includes(masterList[i].user))
        {console.log(`rejected repeat creation of ${masterList[i]} button`)}
    else
        {userNames.push(masterList[i].user)
        console.log(userNames)}}  
           
        return(
    userNames.map(userName=><StyledUserNav><button className="bttn"key={userName}> <Link to={`/recommendations/${userName}`}>{`${userName}'s Faves`}</Link></button></StyledUserNav>)
    )
}

export default UserNavBar;

const StyledUserNav = styled.div`

.bttn{
    padding-top:10px;
    border:black;
    width: 10%;
    border-radius: 10px;
    margin: 10px;
    font-family: monaco;
    display: inline-block;
    background-color:#326B9D;
    color:#E3BB1C;
    float: right;
    margin-right: 2%;
    text-color: #E3AA1C;
    margin-bottom: 30px;
  
 }`