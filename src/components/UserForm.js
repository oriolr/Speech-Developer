import React, { Component } from 'react'
import Title from './Title';
import SpeechIntro from './SpeechIntro';
import PointOne from './PointOne';
import TransOne from './TransOne';
import PointTwo from './PointTwo';
import TransTwo from './TransTwo';
import PointThree from './PointThree';
import TransThree from './TransThree';
import Conclusion from './Conclusion'
import Confirm from './Confirm';
import Success from './Success'

export class UserForm extends Component {
    state = {
        step:1,
        speechTitle: '',
        introduction: '',
        firstPoint: '',
        firstTransition: '',
        secondPoint: '',
        secondTransition: '',
        thirdPoint: '',
        thirdTransition: '',
        summary: ''
    }

    //Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    } 

    // Go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle field change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const { step } = this.state;
        const {speechTitle,
               introduction, 
               firstPoint, 
               firstTransition, 
               secondPoint, 
               secondTransition, 
               thirdPoint, 
               thirdTransition, 
               summary} = this.state;
        const values = {speechTitle, 
            introduction,
            firstPoint, 
            firstTransition, 
            secondPoint, 
            secondTransition, 
            thirdPoint, 
            thirdTransition, 
            summary}
       
        switch (step) {
            case 1: 
                return(
                    <Title
                      nextStep={this.nextStep}
                      handleChange={this.handleChange}
                      values={values}
                    />
                );

                case 2: 
                return(
                    <SpeechIntro
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange={this.handleChange}
                      values={values}
                    />
                );
                case 3:
                    return (
                        <PointOne 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
                );
                
                case 4:
                    return (
                        <TransOne 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
                );


                case 5:
                    return (
                        <PointTwo 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
                );

                case 6:
                    return (
                        <TransTwo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
                );
                case 7:
                    return (
                        <PointThree
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
                );
                case 8:
                    return (
                        <TransThree 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
                );

                case 9:
                    return (
                        <Conclusion
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
                );
                case 10:
                    return (
                        <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                        />
                );
                case 11:
                    return <Success />
        }
    }
}

export default UserForm;
