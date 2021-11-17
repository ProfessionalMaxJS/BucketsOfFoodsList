import {useEffect, useState} from "react";
import ListItem from "./ListItem";

function AddNewForm({list, setList}){

  const [formData,setFormData] = useState([]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    fetch("http://localhost:3000/users", {         //add url  for the masterlist
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => { 
      setList([...list, data])
      setFormData({
        rName:'',
        address:'',
        favDish: '',
        image: '',
        price: '',     
      })
    })}

return(
<>
  <form onSubmit={handleSubmit} >
  <label>Name</label>
  <input 
  type="text"
  rName="name"
  aria-label="name"
  value={formData.rName}
  onChange={handleChange}
  ></input>
  <label>Address</label>
  <input 
  type="text"
  name="address"
  aria-label="address"
  value={formData.address}
  onChange={handleChange}
  ></input>
  <label>favDish</label>
  <input 
  type="text"
  name="favDish"
  aria-label="genre"
  value={formData.favDish}
  onChange={handleChange}
  ></input>
  <label>Price</label>
  <input 
  type="number"
  name="price"
  aria-label="price"
  value={formData.price}
  onChange={handleChange}
  ></input>
  <label>Image</label>
  <input 
  type="text"
  name="image"
  aria-label="image"
  value={formData.image}
  onChange={handleChange}
  ></input>
  <input type="submit" />
</form>
</>
)
}


export default AddNewForm;