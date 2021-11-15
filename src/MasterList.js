import SearchBar from "./SearchBar"
import {useEffect,useState} from "react"
import ListItem from "./ListItem"
import AddNewForm from "./AddNewForm";

function MasterList(){
    const [lists,setList] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(data => setList(data))
    },[])


    return(
        <div>
        <SearchBar />
        {lists.map(list => <ListItem key={list.id} id={list.id} user={list.user} rname={list.Rname} address={list.address} favDish={list.favDish} price={list.price} image={list.image}/>)}
        <AddNewForm />
        </div>
    )
}

export default MasterList;