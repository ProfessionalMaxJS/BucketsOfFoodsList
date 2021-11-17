import {useEffect, useState} from "react";
import ListItem from "./ListItem";

function AddNewForm({list, setList}){

  const [formData,setFormData] = useState({        
  user:'',
  rName:'',
  address:'',
  favDish: '',
  image: '',
  price: '', 
  comment: '',
});

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
        user:'',
        rName:'',
        address:'',
        favDish: '',
        image: '',
        price: '', 
        comment: '',    
      })
    })}

return(
<>
  <form onSubmit={handleSubmit} >
  <label>Submitted By:</label>
  <input 
  type="text"
  name="user"
  aria-label="user"
  value={formData.user}
  onChange={handleChange}
  ></input>
  <label>Restaurant Name</label>
  <input 
  type="text"
  name="rName"
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
  step="0.01"
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
  <label>Comments</label>
  <input 
  type="text"
  name="comment"
  aria-label="comment"
  value={formData.comment}
  onChange={handleChange}
  ></input>
  <input type="submit" />
</form>
</>
)
}


export default AddNewForm;