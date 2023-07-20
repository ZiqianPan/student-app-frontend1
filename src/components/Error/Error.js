import React from 'react'

export default function Error({ error }) {
    console.log(`<Error/> rendered! error=${error}`)
  return (
    <div className='Error'>
         There was and error: {error}
         <br/>
         Please refresh the page or contact support.
    </div>
  )
}
