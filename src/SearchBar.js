
import styled from "styled-components"
import {useState} from "react";

function SearchBar({masterList, setList}){

  const [search, setSearch] = useState("")
  
  function handleChange(e){
    setSearch(e.target.value)
  
    setList(masterList.filter((listObj) => (listObj.rName.toLowerCase().includes(e.target.value.toLowerCase())) || (listObj.favDish.toLowerCase().includes(e.target.value.toLowerCase()))))
  }

    return (
      <StyledSearchBar>
        <div className="searchbar">
          <input type="text" id="search" placeholder= "Search Restuarants/Foods" value={search} onChange={handleChange}/>
        </div>
        </StyledSearchBar>
      );
    }

export default SearchBar;

const StyledSearchBar = styled.div`
.searchbar{
  width: 100%;
  position: relative;
  display: flex;

  

}

#search{
  width: 50%;
  border: 3px solid black;
  padding: 5px;
  margin-top: 20px;
  height: 20px;
  border-radius: 10px;
  font-family: monaco;
  
  

}

}`

