import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';



export class PointThree extends Component {
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
                        <h2>What is the third main point of your speech</h2>
                      <form>
                        <TextField
                            label="Third Main Point"
                            onChange={handleChange('thirdPoint')}
                            defaultValue={values.thirdPoint}
                            />
                        </form>
                           
                           <Button variant="contained" color="primary" onClick={this.continue}>Continue</Button>
                           <Button variant="contained" color="secondary" onClick={this.back}>Back</Button>
                    </React.Fragment>
                </MuiThemeProvider>
        )
    }
}


export default PointThree;
