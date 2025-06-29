import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';



export class PointTwo extends Component {
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
                        <h2>What is the two main point of your speech</h2>
                      <form>
                        <TextField
                            label="Second Main Point"
                            onChange={handleChange('secondPoint')}
                            defaultValue={values.secondPoint}
                            />
                        </form>
                           
                           <Button variant="contained" color="primary" onClick={this.continue}>Continue</Button>
                           <Button variant="contained" color="secondary" onClick={this.back}>Back</Button>
                    </React.Fragment>
                </MuiThemeProvider>
        )
    }
}


export default PointTwo;
