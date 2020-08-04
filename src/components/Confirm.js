import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
/*import Button from '@material-ui/core/Button';*/



export class FormUserDetails extends Component {
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
        const { values: {speechTitle, 
            introduction,
            firstPoint, 
            firstTransition, 
            secondPoint, 
            secondTransition, 
            thirdPoint, 
            thirdTransition, 
            summary}} = this.props;
        return (
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar>
                          
                        </AppBar>
                      <List>
                          <ListItem>
                            <ListItemText primary="Speech Title" secondary={speechTitle} />
                          </ListItem>
                          <ListItem>
                             <ListItemText primary="Speech Introduction" secondary={introduction} />
                          </ListItem>
                           <ListItem>
                             <ListItemText primary="Main Point One" secondary={firstPoint} />
                          </ListItem>
                          <ListItem>
                             <ListItemText primary="First Transition" secondary={firstTransition} />
                          </ListItem>

                          <ListItem>
                             <ListItemText primary="Main Point Two" secondary={secondPoint} />
                          </ListItem>
                          <ListItem>
                             <ListItemText primary="Second Transition" secondary={secondTransition} />
                          </ListItem>

                          <ListItem>
                             <ListItemText primary="Main Point Three" secondary={thirdPoint} />
                          </ListItem>
                          <ListItem>
                             <ListItemText primary="Third Transition" secondary={thirdTransition} />
                          </ListItem>
                          <ListItem>
                             <ListItemText primary="Conclusion" secondary={summary} />
                          </ListItem>
                      </List>
                    
                           
                          
                    </React.Fragment>
                </MuiThemeProvider>
        )
    }
}


export default FormUserDetails;
