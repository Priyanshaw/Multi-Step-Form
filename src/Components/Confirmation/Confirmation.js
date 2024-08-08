import React from 'react'
import Checkbox from '@mui/material/Checkbox';
function Confirmation() {
  return (
    <>
        <p class="muted">Confirm Your details and select the checkbox before confirming.</p>
                
        <div class="container">
        <Checkbox defaultChecked id="confirmation" required/>
        <p>I confirm that the details provided are correct and I have read and understood the Terms and Conditions.</p>
        </div>
        
    </>
  )
}

export default Confirmation