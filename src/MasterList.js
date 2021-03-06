import SearchBar from "./SearchBar"
import {useEffect,useState} from "react"
import ListItem from "./ListItem"
import NavBar from "./NavBar"
import AddNewForm from "./AddNewForm";
import Recommendations from "./Recommendations";
import UserFilter from "./UserFilter";
import {Route, Switch} from "react-router-dom";

import { Scrollbars } from 'rc-scrollbars';

function MasterList(){
    const [list,setList] = useState([]);
    const [masterList, setMasterList] = useState([]);
     
    useEffect(() => {
        fetch("https://foodbuckets.herokuapp.com/users")
        .then(res => res.json())
        .then(data => {
            setList(data)
            setMasterList(data)})
    },[])
    
return(
    <>
   <h1 id="heading" style={{ margin:"0%", padding: "10px", font:"Monaco"}}> Buckets Of Food List </h1>
   <p id="subHeading"> "Is it a Bucket List of Foods? Or a List of Foods that come in Bucket? You Decide!"</p>
    <NavBar setList={setList} masterList={masterList} />
<Switch>
    <Route path="/search">
        <SearchBar setList={setList} masterList={masterList}/>
    </Route>

    <Route path="/contribute">
        <AddNewForm masterList={masterList} setMasterList={setMasterList} list={list} setList={setList}/>
    </Route>
    
    <Route path="/recommendations/:user">
        <UserFilter masterList={masterList} setList={setList}/>
    </Route>

    <Route path="/recommendations">
        <Recommendations masterList={masterList}/>
    </Route>

</Switch>


<Scrollbars style={{ width: 800, height: 500,marginLeft:"20%", marginTop:"30px" }}>
    {list.map(listObj => <ListItem key={listObj.id} user={listObj.user} rName={listObj.rName} address={listObj.address} favDish={listObj.favDish} price={listObj.price} image={listObj.image} comment={listObj.comment}/>)}
</Scrollbars>   


        </>
    )
}

export default MasterList;
