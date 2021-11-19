import {Link} from "react-router-dom"

function UserNavBar({masterList}){

let userNames = [];

for(let i=0; i<masterList.length; i++)
    {   if (userNames.includes(masterList[i].user))
        {console.log(`rejected repeat creation of ${masterList[i]} button`)}
    else
        {userNames.push(masterList[i].user)
        console.log(userNames)}}  
           
        return(
    userNames.map(userName=><button key={userName}> <Link to={`/recommendations/${userName}`}>{`${userName}'s Faves`}</Link></button>)
    )
}

export default UserNavBar;
