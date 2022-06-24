import React from 'react';
import './App.css';
import {TextField, Button, Divider} from '@material-ui/core';
import {Link} from'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBox from '@material-ui/core/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PersonAddIcon from '@material-ui/icons/PersonAdd';


const Signup=()=> {
    return(
        <div>
            <div className="icon">
                <div className="icon_class">
                    <PersonAddIcon fontsize="large"/>
                </div>
                <div className="text">Sign up</div>
            </div>
            
            <div className="row m-2">
                <div className="col-6 p-2">
                    <TextField id="firstname" type="text" variant="outlined" label="Enter First Name" fullwidth/>
                </div>
                <div className="col-6 p-2">
                    <TextField id="lastname" type="text" variant="outlined" label="Enter Last Name" fullwidth/>
                </div>
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
                    label="I agree to all terms and conditions"
                    />
                   
            <Button variant="contained" color="primary">Create Account</Button>
            </div>
            <Divider variant="middle"/>
            <p className="text-center">
                <Link to="Login" className="text-black-50">
                    <h5>Already have an account?</h5>
                </Link>
            </p>

        </div>

    )

}
export default Signup
