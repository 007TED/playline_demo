import React from 'react';
import './signup.css';
import { TextField } from '@material-ui/core';


const SignUp = ({formData , setFormData}) => {
    return(
        <div className="sign-up-container">
        <TextField
            type="text"
            label="Email"
            className="text_field"
            value={formData.email}
            onChange={(event) => setFormData({...formData, email: event.target.value})}
        />
        <TextField type="password"
                   label="password"
                   className="text_field"
                   id="password"
                   value={formData.password}
                   onChange={(event) => setFormData({...formData, password: event.target.value})}
        />
        </div>
    )
}

export default SignUp;