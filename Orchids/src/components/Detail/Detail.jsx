import React from 'react'
import { useParams } from 'react-router-dom'
import '../Detail/Detail.css'
import { Orchids } from '../Shared/ListOfOrchids'

export default function Detail() {
    const userName = useParams();
        const orchid = Orchids.find(obj => {
            return obj.id == userName.id;
        });
        return (
            <div className='container'>
            <div className='orchid-card'>
               <div className='badge'>{orchid.name}</div>
               <div className='product-tumb'>
                   <img src={`../${orchid.img}`} alt=''/>
               </div>
               <div className='orchid-details'>
                   <h4>{orchid.origin}</h4>
                   <p><strong>Category:</strong> {orchid.category}</p>
                   <p><strong>Color</strong> {orchid.color}</p>
                   <p><strong>Rating</strong> {orchid.rating}</p>

                     <div className='orchid-color'>Description: {orchid.info}</div>
                     <div className='orchid-bottom-details'></div>
               </div>
         </div>
       </div>
          )
        }
