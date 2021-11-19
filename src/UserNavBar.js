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
    userNames.map(userName=><StyledUserNav><button className="bttn"key={userName}> <Link to={`/recommendations/${userName}`}>{`${userName}`}</Link></button></StyledUserNav>)
    )
}

export default UserNavBar;

const StyledUserNav = styled.div`

.bttn{
    float: center;
    margin-top:40px;
    background-color: #326B9D;
    border-radius: 10px;
    font-size: 10px;
    margin: 25px;
    
 }
 a{
     color:#E3BB1C;
     text-decoration: none;

 }`