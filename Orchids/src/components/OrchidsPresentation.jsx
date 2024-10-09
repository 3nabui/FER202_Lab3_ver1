import React from 'react'
import { ThemeContext } from './ThemeContext';
import { useState } from 'react';
import { Link } from 'react-router-dom'
export default function OrchidsPresentation({orchids}) {
  
    
     const [orchid, setOrchid] = useState([])
     return (
      <div className='container'>
         {orchids.map((orchid)=>(
         <div className='column' key={orchid.id}>
         <div className='card'>
         <img src={orchid.img}/>
           <h3>{orchid.name}</h3>
           <p className='title'>{orchid.color}</p>
           <Link to={`detail/${orchid.id}`}> 
            <p><button>Detail</button></p>
            </Link>

         </div>
       </div>
      ))}
      </div>   
   )
 }
 
