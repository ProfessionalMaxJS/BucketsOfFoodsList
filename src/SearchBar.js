import styled from "styled-components"

function SearchBar({search,setSearchedFood}){

  function handleChange(e){
    setSearchedFood(e.target.value)
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
  background: rgba(227, 187, 28, 0.1)

}

}`

