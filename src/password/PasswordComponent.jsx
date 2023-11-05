import React from 'react'
import {Password} from 'primereact/password';

const PasswordComponent = () => {
  return (
    <React.Fragment>
        <div className='card flex justify-content-center'>
            <Password toggleMask/>
            
        </div>
    </React.Fragment>
  )
}

export default PasswordComponent