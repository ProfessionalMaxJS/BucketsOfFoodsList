import {useEffect, useState} from "react";

function AddNewForm(){
    return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
              id='name'
            />
          </div>
          <div>
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              name='address'
              value={this.state.address}
              onChange={this.handleChange}
              id='address'
            />
          </div>
          <div>
            <label htmlFor='FavDish'>FavDish</label>
            <input
              type='text'
              name='FavDish'
              value={this.state.FavDish}
              onChange={this.handleChange}
              id='FavDish'
            />
          </div>
          <div>
            <label htmlFor='price'>Price</label>
            <input
              type='text'
              name='price'
              value={this.state.price}
              onChange={this.handleChange}
              id='price'
            />
          </div>
          <div>
            <label htmlFor='image'>Image</label>
            <input
              type='image'
              name='image'
              value={this.state.image}
              onChange={this.handleChange}
              id='image'
            />
          </div>
          <button>Add New Box!</button>
        </form>
      );
    }

export default AddNewForm;