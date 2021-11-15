import SearchBar from "./SearchBar"
import {useEffect,useState} from "react"
import ListItem from "./ListItem"

function MasterList(){
    

    useEffect(() => {
        fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(data => console.log(data))
    })

    return(
        <div>
            
        <SearchBar />
        <ListItem />
        </div>
    )
}

export default MasterList;