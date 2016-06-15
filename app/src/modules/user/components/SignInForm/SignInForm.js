import React, { Component, PropTypes } from 'react';
import {reduxForm} from 'redux-form';

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;

};

export class SignInForm extends Component {

  render(){
    const {fields: {email, password}, handleSubmit, submitting} = this.props;
    
    return (
      <form onSubmit={handleSubmit}>
  	    <div className="md-form-group float-label">
  	      <input type="email" className="md-input" {...email} required></input>
  	      {email.touched && email.error && <div classNameName="form-control-feedback">{email.error}</div>}
  	      <label>Email</label>
  	    </div>
  	    <div className="md-form-group float-label">
  	      <input type="password" className="md-input" required {...password}></input>
  	      <label>Password</label>
  	    </div>      
  	    <div className="m-b-md">        
  	      <label className="md-check">
  	        <input type="checkbox"></input><i className="primary"></i> Keep me signed in
  	      </label>
  	    </div>
  	    <button type="submit" className="btn primary btn-block p-x-md" onClick={handleSubmit}>Sign in</button>
  	  </form>
    )
  }
}

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  submitting: PropTypes.bool
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password'],
  validate
})(SignInForm)