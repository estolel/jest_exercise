import React, {Component} from "react";
import { Box, Typography } from "@material-ui/core";
import CheckboxWithLabel from './CheckboxWithLabel.js';


export class Account extends Component{
    constructor(props){
        super(props)
        this.state = {
            isChecked: false
        }
    }

    render(){
        const {user} = this.props


        return(
            <div key = {user.username}>
                <Box justifyContent="center" border={1} style={{width:300}}>
                    <div style={{padding: 10}}>
                        <Typography className='name'>Name: {user.name}</Typography>
                        <Typography className='email'>E-mail Address: {user.email}</Typography>
                        <CheckboxWithLabel labelOn={user.username + " is an active User"}
                            labelOff={user.username + " is an inactive User"}/>
                    </div>
                </Box>
            </div>
        )

    }
}


export default Account;