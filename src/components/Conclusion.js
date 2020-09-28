import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';



export class Conclusion extends Component {
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
                        <h2>What is your speech conclusion</h2>
                      <form>
                        <TextField
                            label="Conclusion"
                            onChange={handleChange('summary')}
                            defaultValue={values.summary}
                            />
                        </form>
                           
                           <Button variant="contained" color="primary" onClick={this.continue}>Continue</Button>
                           <Button variant="contained" color="secondary" onClick={this.back}>Back</Button>
                    </React.Fragment>
                </MuiThemeProvider>
        )
    }
}


export default Conclusion;
