import React, { Component } from 'react';
import EmailForm from './EmailForm';
import * as Constants from  '../../src/constants';

class Contact extends Component {
render(){
    return(
        <div>
        <h2>Contact Ian!</h2>
        <p>
            {Constants.EMAIL_FORM_MESSAGE}
        </p>
        <EmailForm/>
        </div>
        /* TODO
            Have contact form:
            - Email comments/ requests for contact/ feedback to me.
            - need some kind of captcha before submitting form.
        */
    );
}
}

export default Contact;