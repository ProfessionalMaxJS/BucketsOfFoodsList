import {Link} from "react-router-dom"
import styled from "styled-components"


function NavBar({setList, masterList}){

    function replenish(){
        setList(masterList)
    }

    return(
<StyledNavBar   >
    <Link to={"/"}><button onClick={replenish}>Home Screen</button></Link>
    <Link to={"/search"}><button onClick={replenish}>Search the List</button></Link>
    <Link to={"/contribute"}><button onClick={replenish}>Add to the List </button></Link>
    <Link to={"/recommendations"}><button onClick={replenish}>See our Faves!</button></Link>
</StyledNavBar  >
    )
}

export default NavBar

const StyledNavBar = styled.div`
background-color: rgba(227, 170, 28, 0.4);

button{
    background-color: #326B9D;
    width: 12%;
    font-weight: bold;
    border-radius: 10px;
    margin: 20px;
}`

