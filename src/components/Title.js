import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';



export class Title extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar>
                          
                        </AppBar>
                        <h2>What is your speech title?</h2>
                      <form>
                        <TextField
                            label="Speech Title"
                            onChange={handleChange('speechTitle')}
                            defaultValue={values.speechTitle}
                            />
                        </form>
                           
                           <Button variant="contained" color="primary" onClick={this.continue}>Continue</Button>
                         
                    </React.Fragment>
                </MuiThemeProvider>
        )
    }
}


export default Title;
