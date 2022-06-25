import React, { useState } from 'react'

export default function Tour({id,image,info,price,name,removeTour}) {
    const [readMore ,setReadMore] =useState(false)
  return (
    <div className='our-tours'>
        <img src={image} alt={name} />
        <div className='info-details'>
            <h4>{name}</h4>
            <h4>{price}</h4>


        </div>

    <div className='btn-para-sec'>

        
        <p className='info'>
            {
                readMore ? info: `${info.substring(0,200)} .....`
            
            }
        </p>
        <span>
        <button onClick={()=> setReadMore(!readMore) } >
            {readMore?'see less': 'ReadMore'}
        </button>
        </span>

        <button onClick={()=> removeTour(id) }>Not Interested</button>
        </div>

    </div>
  )
}
