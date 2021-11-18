import SearchBar from "./SearchBar"
import {useEffect,useState} from "react"
import ListItem from "./ListItem"
import NavBar from "./NavBar"
import AddNewForm from "./AddNewForm";
import UserFilter from "./UserFilter";
import {Route, Switch} from "react-router-dom";
import styled from "styled-components"
import { Scrollbars } from 'rc-scrollbars';

function MasterList(){
    const [list,setList] = useState([]);
    const [searchedFood, setSearchedFood] = useState("")
    const [selectedUser,setSelectedUser] = useState("")
    

useEffect(() => {
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(data => setList(data))
    },[])

const visibleList = list.filter((list) => (list.rName.toLowerCase().includes(searchedFood.toLowerCase())) || (list.favDish.toLowerCase().includes(searchedFood.toLowerCase())))
const userList = list.filter((list) => (list.user === selectedUser))
const newFilter = selectedUser ? userList : visibleList


return(
    <>
    <h1 style={{backgroundColor: "rgba(227, 170, 28, 0.4)", margin:"0%"}}> Buckets Of Food List </h1>
    <NavBar />
<Switch>
    <Route path="/search">
        <SearchBar setSearchedFood={setSearchedFood} search={searchedFood}/>
    </Route>

    <Route path="/contribute">
        <UserFilter list={list} setSelectedUser={setSelectedUser}/>
        <AddNewForm list={list} setList={setList}/>
    </Route>
    
    <Route path="/recommendations">
    <UserFilter list={list} setSelectedUser={setSelectedUser}/>
    </Route>
</Switch>

<Scrollbars style={{ width: 900, height: 400,marginLeft:"15%", marginTop:"10%", scrollMargin: 0}}>
<StyledListItem>
        {newFilter.map(list => <ListItem key={list.id} id={list.id} user={list.user} rName={list.rName} address={list.address} favDish={list.favDish} price={list.price} image={list.image} comment={list.comment}/>)}
        </StyledListItem>
        </Scrollbars>
    </>
    )
}

export default MasterList;

const StyledListItem = styled.div`
color: #E3BB1C;
text-align: center;
display: grid;
grid-template-columns: 1fr;

img{
    width: 200px;
}
}`


