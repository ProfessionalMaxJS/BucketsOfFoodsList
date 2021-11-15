import SearchBar from "./SearchBar"
// import {useEffect} from "react"
import ListItem from "./ListItem"

function MasterList(){
    
    const newArr = [1,2,3,4,5,6]

    return(
        <div>
        <SearchBar />
        <h1>This is where the Master List of Foods Will Go</h1>
        {newArr.map(arrItem=><ListItem key={arrItem} id={arrItem} />)}
        
        
        {/* useEffect(()=>{
            fetch("https://localhost:3000")
            .then(resp=>resp.json())
            .then(data=>{
                data.map(dataObb=><ListItem name={item.name}/>)
            })
            }) */}
        </div>
    )
}

export default MasterList;