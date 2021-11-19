import {useEffect} from "react"
import {useParams} from "react-router-dom"

function UserFilter({list, setList}){

const userObj = useParams().user
console.log(userObj)

useEffect(()=>{
    // console.log("test") -- Console Log from when I wasn't sure if the Component was "even making it this far"... 
setList(list.filter(listObj => listObj.user===userObj))
}, [])

return(<h1>These are {userObj}'s Faves</h1>)

}

export default UserFilter;