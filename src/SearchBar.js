import {useState} from "react";

function SearchBar({masterList, setList}){

  const [search, setSearch] = useState("")
  
  function handleChange(e){
    setSearch(e.target.value)
  
    setList(masterList.filter((listObj) => (listObj.rName.toLowerCase().includes(e.target.value.toLowerCase())) || (listObj.favDish.toLowerCase().includes(e.target.value.toLowerCase()))))
  }

    return (
        <div className="searchbar">
          <label htmlFor="search">Search Restuarants</label>
          <input type="text" id="search" placeholder= "What are you searching for?" value={search} onChange={handleChange}/>
        </div>
      );
    }

export default SearchBar;