import {useState} from "react";
import styled from "styled-components"


function AddNewForm({list, setList, masterList, setMasterList}){

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

 function handleSubmit(e){
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
      setList([data, ...list])
      setMasterList([data, ...masterList])
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
  <StyledFormList>
  <h1> Add Your Favorite To The List</h1>
  <form onSubmit={handleSubmit} style={{marginLeft:"10%", marginRight:"10%", marginTop:"5%", fontFamily: "monaco", fontWeight: "bold"}}>
  <div>
  <label>Restaurant Name</label>
  <input 
  type="text"
  name="rName"
  aria-label="name"
  value={formData.rName}

  onChange={handleChange}
  ></input>
  </div>
  <div>
  <label>Address</label>
  <input 
  type="text"
  name="address"
  aria-label="address"
  value={formData.address}
  onChange={handleChange}
  ></input>
  </div>

  <div>
  <label>Favirote Food </label>
  <input 
  type="text"
  name="favDish"
  aria-label="genre"
  value={formData.favDish}
  onChange={handleChange}
  ></input>
  </div>
  <div>
  <label>Price</label>
  <input 
  type="number"
  name="price"
  step="0.01"
  aria-label="price"
  value={formData.price}
  onChange={handleChange}
  ></input>
  </div>
  <div>
  <label>Image</label>
  <input 
  type="text"
  name="image"
  aria-label="image"
  value={formData.image}
  onChange={handleChange}
  ></input>
  </div>
  <div>
   <label>Submitted By:</label>
  <input 
  type="text"
  name="user"
  aria-label="user"
  value={formData.user}
  onChange={handleChange}
  ></input>
  </div>
  <div>
  <label>Comments</label>
  <input 
  type="text"
  name="comment"
  aria-label="comment"
  value={formData.comment}
  onChange={handleChange}
  ></input>
  </div>
  <div>
  
  <button type="submit" >
    Submit Listing
    </button>
  
  </div>
</form>

</StyledFormList>
</>
)
}


export default AddNewForm;

const StyledFormList = styled.div`
color: #326B9D;
input{
  display: inline-block;
  width: 350px;
  align: center;
  padding-bottom: 10px;
  border-radius: 20px;
  color: #326B9D;
  font-family: Copperplate;
  border: 2px solid #326B9D;
  margin-right: 35px;
}
margin-top: 10px;

h1{
  margin-top:50px;
}
label{
  display: inline-block;
  width: 175px;
  text-align: center;
  border-radius: 20px;
  color: #326B9D;
  font-family: Copperplate;
  margin-right: 35px;
}
button{
  display: inline-block;
  color: white;
  width: 225px;
  align: center;
  margin-top: 35px;
  border-radius: 20px;
  font-family: Copperplate;
  border: 2px solid #326B9D;
  background-color: blue;
}
`