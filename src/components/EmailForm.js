import React,{Component} from 'react';
import {Form, Container} from 'react-bootstrap'
import Recaptcha from 'react-google-invisible-recaptcha';
import * as Constants from  '../../src/constants';

class EmailForm extends Component {
    constructor(){
        super();
        this.state={
            email:'',
            emailMessage:'',
            recaptchaReady: false,
            formReady: false,
            error: false,
            message: null   
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onResolved = this.onResolved.bind(this);
        this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
        this.verifyRecaptcha = this.verifyRecaptcha.bind(this);
    }

    handleEmailChange(event){
        this.setState({email: event.target.value})
    }

    handleSubjectChange(event){
        this.setState({subject: event.target.subject})
    }

    handleMessageChange(event){
        this.setState({message: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();

    //    if( this.Recaptcha.execute()){
            alert('Email submitted successfully from ' + this.state.email);    
        // } else{
            // alert('Please verify that you are a human.');
        // }

        
    }

    recaptchaLoaded(){
        this.setState({recaptchaReady:false})
    }

    onResolved(){
        this.setState({isVerified:true});
        this.recaptcha.getResponse();
    }

    onRecaptchaError(){
        this.setState({
            error: true,
            message:'Recaptcha encountered an error.'});
    }

    verifyForm(){
        if(this.state.recaptchaReady && this.state.emailMessage && this.state.email){
            this.setState({formReady:true})
        } else{
            this.setState({formReady:false})
        }
    }
    
    verifyRecaptcha(response){
        if(response){
            this.setState({
                isVerified: true
            })
        } 
    }

    render(){
        return(
            <Container >
                <div className="row">
                    <div className="col-lg-2 col-md-1"></div>
                    <div className="col-lg-8 col-md emailForm">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="emailForm.emailInput" as={Form.Row}>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="be@peace.com" email={this.state.email} onChange={this.handleEmailChange}/>
                        </Form.Group>
                        <Form.Group controlId="emailForm.messageTextArea">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows="10" email={this.state.emailMessage} onChange={this.handleMessageChange}/>
                        </Form.Group>
                        <Form.Group  className="emailFormSubmit"  controlId="emailForm.submitInput" >
                            <Form.Control type="submit" value="Submit"/>
                            <Recaptcha
                                ref={ ref => this.recaptcha = ref }
                                sitekey={Constants.RECAPTCHAV3_SITE_KEY}
                                onResolved ={this.onResolved}
                                onLoaded={this.recaptchaLoaded}
                                onError= {this.onRecaptchaError}
                            />
                        </Form.Group>
                    </Form>
                    
                    
                    </div>
                    <div className="col-lg-2 col-md-1"></div>
                </div>
            
            </Container>
        );
    }
}
export default EmailForm;