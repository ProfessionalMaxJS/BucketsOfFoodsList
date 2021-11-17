import SearchBar from "./SearchBar"
import {useEffect,useState} from "react"
import ListItem from "./ListItem"
import AddNewForm from "./AddNewForm";
import UserFilter from "./UserFilter";

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
        <div>
        <h1> Buckets Of Foods List </h1>
        <SearchBar setSearchedFood={setSearchedFood} search={searchedFood}/>
        <UserFilter list={list} setSelectedUser={setSelectedUser}/>
        {newFilter.map(list => <ListItem key={list.id} id={list.id} user={list.user} rName={list.rName} address={list.address} favDish={list.favdish} price={list.price} image={list.image} comment={list.comment}/>)}
        <AddNewForm list={list} setList={setList}/>
        </div>
    )
}

export default MasterList;