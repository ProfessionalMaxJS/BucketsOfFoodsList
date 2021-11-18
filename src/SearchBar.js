function SearchBar({search,setSearchedFood}){

  function handleChange(e){
    setSearchedFood(e.target.value)
  }

    return (
        <div className="searchbar">
          <label htmlFor="search">Search Restuarants</label>
          <input type="text" id="search" placeholder= "What are you searching for?" value={search} onChange={handleChange}/>
        </div>
      );
    }

export default SearchBar;