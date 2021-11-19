import {Link} from "react-router-dom"
import styled from "styled-components"

function NavBar({setList, masterList}){

function replenish(){
    setList(masterList)
}

return(
<StyledNavBar >
    <Link to={"/"}><button className="navBttn" onClick={replenish}>Home Screen</button></Link>
    <Link to={"/search"}><button className="navBttn" onClick={replenish}>Search the List</button></Link>
    <Link to={"/contribute"}><button className="navBttn" onClick={replenish}>Add to the List </button></Link>
    <Link to={"/recommendations"}><button className="navBttn" onClick={replenish}>See our Faves!</button></Link>
    
</StyledNavBar  >
    )
}

export default NavBar

const StyledNavBar = styled.div`
color: #E3BB1C;

button{
        border: 1px solid #E3BB1C;
        border-radius: 10px;
        margin: 10px;
        background-color: inherit;
        padding: 10px;
        font-size: 25px;
        cursor: pointer;
        display: inline-block;
        font-family: Copperplate;
        font-weight: bold;
        color: #326B9D;
         
     
     }
     .btn:hover {background: #eee;}
}`

