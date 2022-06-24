import React from 'react';
import './App.css';
import {TextField, Button, Divider} from '@material-ui/core';
import {Link} from'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBox from '@material-ui/core/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PersonIcon from '@material-ui/icons/Person';


const Login=()=> {
    return(
        <div>
            <div className="icon">
                <div className="icon_class">
                    <PersonIcon fontsize="large"/>
                </div>
                <div className="text">Log in</div>
            </div>
            
        

            <div className="row m-2">
            <TextField id="email" className="p-2" type="text" variant="outlined" label="Enter Email" fullwidth/>
            <TextField id="password" className="p-2" type="text" variant="outlined" label="Enter Password" fullwidth/>
            <FormControlLabel
                    control={
                        <CheckBox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small"/>}
                            checkedIcon={<CheckBoxIcon fontsize="small"/>}
                            name="checkedI"
                            />
                    }
                    label="Remember me"
                    />
                   
            <Button variant="contained" color="primary" fullwidth>Log in</Button>
            </div>
            <Divider variant="middle"/>
            <p className="text-center">
                <Link to="Signup" className="text-black-50">
                    <h5>Create account</h5>
                </Link>
            </p>

        </div>

    )

}
export default Login
