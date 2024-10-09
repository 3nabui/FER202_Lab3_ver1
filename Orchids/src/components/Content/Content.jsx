import React, { Component } from 'react'
import {Orchids} from '../Shared/ListOfOrchids'
import '../Content/Content.css'
export default class Content extends Component {
  render() {
    return (
      <div className='container'>
      {Orchids.map((orchid)=> (
          <div className='column' key={orchid.id}>
          <div className='card'>
              <img src={orchid.img} alt={orchid.name}/>
              <p className='title'>{orchid.name}</p>
              <p><strong>Category:</strong> {orchid.category}</p>
              <p><strong>Origin:</strong> {orchid.origin}</p>
              <p><strong>Color:</strong> {orchid.color}</p>
              <p><strong>Rating:</strong> {orchid.rating}</p>
              <p><strong>Special:</strong> {orchid.isSpecial}</p>
              <p><button>Detail</button></p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}