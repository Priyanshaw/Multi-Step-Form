import React from 'react'
import './PersonalInfo.css';

function PersonalInfo() {
  return (<>
    <p class="muted">Please provide your name, email address and phone number.</p>
    <div id='container'>
    <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        placeholder='Enter your name'
      />
      
      <label htmlFor="email">Password</label>
      <input
        type="email"
        id="email"
        placeholder='Enter your email address'
      />
      
    <label htmlFor="phoneNumber">Phone</label>
      <input
        type="password"
        id="phoneNumber"
        placeholder='Enter your phone number'
      />
    </div>
    </>
  )
}

export default PersonalInfo