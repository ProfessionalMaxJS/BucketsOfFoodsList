import {Link} from "react-router-dom"
import styled from "styled-components"

function NavBar(){

    return(
<StyledNavBar   >
    <Link to={"/"}><button>Home Screen</button></Link>
    <Link to={"/search"}><button>Search the List</button></Link>
    <Link to={"/contribute"}><button>Add to the List </button></Link>
    <Link to={"/recommendations"}><button>See our Faves!</button></Link>
</StyledNavBar  >
    )
}

export default NavBar

const StyledNavBar = styled.div`
background-color: red;

button{
    background-color: green;
    width: 12%;
    font-weight: bold;
}`

