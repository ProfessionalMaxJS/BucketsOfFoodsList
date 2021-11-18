import SearchBar from "./SearchBar"
import {useEffect,useState} from "react"
import ListItem from "./ListItem"
import NavBar from "./NavBar"
import AddNewForm from "./AddNewForm";
import UserFilter from "./UserFilter";
import {Route, Switch} from "react-router-dom";

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
    <h1> Buckets Of Food List </h1>
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
<Scrollbars style={{ width: 500, height: 400,marginLeft:"30%", marginTop:"10%"}}>
        {newFilter.map(list => <ListItem key={list.id} id={list.id} user={list.user} rName={list.rName} address={list.address} favDish={list.favDish} price={list.price} image={list.image} comment={list.comment}/>)}
        </Scrollbars>
    </>
    )
}

export default MasterList;