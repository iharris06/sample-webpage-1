import React,{Component} from 'react';
import {Form, Container} from 'react-bootstrap'

class EmailForm extends Component {
    constructor(){
        super();
        this.state={
            email:"er@at.com",
            subject:"subject",
            message:"message"        
        }
        this.handleChange = this.handleEmailChange.bind(this);
        this.handleChange = this.handleSubjectChange.bind(this);
        this.handleChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event){
        this.setState({email: event.target.email})
    }

    handleSubjectChange(event){
        this.setState({subject: event.target.subject})
    }

    handleMessageChange(event){
        this.setState({message: event.target.message})
    }

    handleSubmit(event){
        alert('Email submitted successfully!');
        event.preventDefault();
    }

    render(){
        return(
            <Container >
                <div class="row">
                    <div class="col-lg-2 col-md-1"></div>
                    <div class="col-lg-8 col-md emailForm">
                    <Form>
                        <Form.Group controlId="emailForm.emailInput" as={Form.Row}>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="be@peace.com"/>
                        </Form.Group>
                        <Form.Group controlId="emailForm.messageTextArea">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows="10"/>
                        </Form.Group>
                        <Form.Group className="emailFormSubmit"  controlId="emailForm.submitInput">
                            <Form.Control type="submit" value="Submit"/>
                        </Form.Group>
                    </Form>
                    </div>
                    <div class="col-lg-2 col-md-1"></div>
                </div>
            
            </Container>
        );
    }
}
export default EmailForm;