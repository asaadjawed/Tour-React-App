import React from 'react'
import Tour from './Tour'

export default function Tours({tours, removeTour}) {
  return (
    <section className='main-tour-sec'>
         <h1>Our Tours</h1>
         <div>
            {
                tours.map((tour)=> {
                    return(
                        <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
                    )
                })
            }
         </div>
    </section>
   
  )
}
