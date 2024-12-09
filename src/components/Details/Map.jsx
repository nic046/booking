import React from 'react'

function Map({lat, lon}) {
  return (
    <div className='aspect-square rounded-lg overflow-hidden'>
        <iframe 
        src={`https://maps.google.com/maps?q=${lat},${lon}&z=15&output=embed`} 
        loading="lazy"
        allowFullScreen
        referrerPolicy='no-referrer-when-downgrade'
        className='w-full h-full'></iframe>
    </div>
  )
}

export default Map