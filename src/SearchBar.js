function SearchBar(){
    
    return (
        <div className="searchbar">
          <label htmlFor="search">Search Restuarants</label>
          <input type="text" id="search" placeholder= "What are you searching for?"
          />
        </div>
      );
    }

export default SearchBar;