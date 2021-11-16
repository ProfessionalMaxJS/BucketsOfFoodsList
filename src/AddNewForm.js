import {useEffect, useState} from "react";

function AddNewForm(){

  const [formData,setFormData] = useState([]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setMasterList([formData,...MasterList])
    setFormData({
      name:'',
      address:'',
      FavDish: '',
      image: '',
      price: '',
  })
  }
  


  <form onSubmit={handleSubmit} >
  <label>Name</label>
  <input 
  type="text"
  name="name"
  aria-label="name"
  value={formData.name}
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
  <label>FavDish</label>
  <input 
  type="text"
  name="FavDish"
  aria-label="genre"
  value={formData.FavDish}
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
}

export default AddNewForm;