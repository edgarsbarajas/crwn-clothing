import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-bottom.component';

import { auth, signInWithGoogle, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;

    auth.signInWithEmailAndPassword(email, password)
      .catch(error => console.error(error));

    this.setState({
      email: "",
      password: ""
    });
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>E-mail and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            label="email"
            value={this.state.email} 
            onChange={this.handleChange} 
            required 
          />
          <FormInput 
            name="password" 
            type="password" 
            label="password"
            value={this.state.password} 
            onChange={this.handleChange} 
            required
          />
          <CustomButton>
            Sign In
          </CustomButton>
          <CustomButton 
            onClick={signInWithGoogle}
            isGoogleSignIn  
          >
            Sign In With Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;