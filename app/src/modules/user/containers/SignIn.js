import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SignInForm from '../components/SignInForm/SignInForm';


export class SignIn extends Component {
	render() {
		return (
			<div className="center-block w-xxl w-auto-xs p-y-md">
			  <div className="navbar">
			    <div className="pull-center">
			    </div>
			  </div>
			  <div className="p-a-md box-color r box-shadow-z1 text-color m-a">
			    <div className="m-b text-sm">Sign in with your Credentials</div>
			    <SignInForm />
			  </div>
			  <div className="p-v-lg text-center">
			    <div>Already have an account? <Link to="/login" className="text-primary _600">Log in</Link></div>
			  </div>
			</div>
		);
	}
}

export default connect()(SignIn);