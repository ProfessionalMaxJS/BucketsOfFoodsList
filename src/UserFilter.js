import {useEffect} from "react"
import {useParams} from "react-router-dom"
import UserNavBar from "./UserNavBar"

function UserFilter({masterList, setList}){
    
const userObj = useParams().user


useEffect(()=>{
const usersList= masterList.filter(listObj => listObj.user===userObj);
console.log(usersList)    
setList(usersList)},[userObj])

return(
<>
<UserNavBar masterList={masterList}/>
<h1>These are {userObj}'s Faves</h1>
</>
)

}

export default UserFilter;