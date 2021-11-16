import SearchBar from "./SearchBar"
import {useEffect,useState} from "react"
import ListItem from "./ListItem"
import AddNewForm from "./AddNewForm";

function MasterList(){
    const [lists,setList] = useState([]);
    const [searchedFood, setSearchedFood] = useState("")
    

    useEffect(() => {
        fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(data => setList(data))
    },[])
    
    const visibleList = lists.filter((list) => (list.rname.toLowerCase().includes(searchedFood.toLowerCase())) || (list.favdish.toLowerCase().includes(searchedFood.toLowerCase())))

    return(
        <div>
        <SearchBar setSearchedFood={setSearchedFood} search={searchedFood}/>
        {visibleList.map(list => <ListItem key={list.id} id={list.id} user={list.user} rname={list.rname} address={list.address} favDish={list.favdish} price={list.price} image={list.image}/>)}
        <AddNewForm />
        </div>
    )
}

export default MasterList;