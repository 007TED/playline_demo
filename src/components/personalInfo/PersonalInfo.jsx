import React from 'react';
import './personalinfo.css';
import { TextField } from '@material-ui/core';


const PersonalInfo = ({formData , setFormData}) => {
    return(
        <div className="personal_info-container">
            <TextField
                type="text"
                label="First name"
                value={formData.firstName}
                onChange={(event) => setFormData({...formData, firstName: event.target.value})}
            />
            <TextField
                type="text"
                label="Last name"
                value={formData.lastName}
                onChange={(event) => setFormData({...formData, lastName: event.target.value})}
            />
        </div>
    )
}

export default PersonalInfo;