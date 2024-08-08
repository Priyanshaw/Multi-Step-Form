import React from 'react'
import './Address.css'
function Address() {
  return (
    <>
    <p className='muted'>Carefully review your Address Information such as (Address , City, State, Zip Code) </p>
    <div id='addressContainer'>
    <label htmlFor="Address1">Address</label>
      <input
        type="text"
        id="Address1"
        placeholder='Enter your Complete Address'
      />
      
    <label htmlFor="State">State</label>
      <input
        type="text"
        id="State"
        placeholder='Enter your State'
      />

<label htmlFor="Zip Code">Zip Code</label>
      <input
        type="number"
        id="Zip Code"
        placeholder='Enter your Zip Code'
      />
    </div>
    </>
  )
}

export default Address