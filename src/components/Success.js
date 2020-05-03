import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';




export class Success extends Component {
    continue = e => {
        e.preventDefault();
        //Process Form //
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        
        return (
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar>
                          
                        </AppBar>
                      <h1>Thank you for your submission</h1>
                    </React.Fragment>
                </MuiThemeProvider>
        )
    }
}


export default Success;
