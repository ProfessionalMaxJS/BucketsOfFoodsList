import {useEffect} from "react"
import {useParams} from "react-router-dom"
import UserNavBar from "./UserNavBar"
import styled from "styled-components"

function UserFilter({masterList, setList}){
    
const userObj = useParams().user


useEffect(()=>{
const usersList= masterList.filter(listObj => listObj.user===userObj);
console.log(usersList)    
setList(usersList)},[userObj])

return(
<>
<UserNavBar masterList={masterList}/>
<StyledUserList>
<h1>{userObj}'s Faves</h1>
</StyledUserList>
</>
)

}

export default UserFilter;

const StyledUserList = styled.div`

border-radius: 15px;
font-family: monaco;
font-size: 20px;
color:#326B9D;
margin-top: 30px;
margin-left: 10px;
margin-bottom: 0px;
`


