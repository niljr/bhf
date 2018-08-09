import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { withRouter } from 'react-router-dom'
// import firebase from 'firebase';
// import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

class RegisterForm extends React.Component {
    emailRef = React.createRef();
    passwordRef = React.createRef();
    rePasswordRef = React.createRef();
    firstNameRef = React.createRef();
    middleNameRef = React.createRef();
    lastNameRef = React.createRef();
    contactNumberRef = React.createRef();
    accountKeyRef = React.createRef();
    
    static propTypes = {
        addUser: PropTypes.func
    };

    state = {
        isSignedIn: false ,// Local signed-in state.
        userId: ''
    };

    createUser = event => {
        // 1.  stop the form from submitting
        event.preventDefault();
        if ( this.passwordRef.value.value !== this.rePasswordRef.value.value) {
            alert('password and retype password does not match');
            return
        }
        const user = {
          email: this.emailRef.value.value,
          password: this.passwordRef.value.value,
          firstName: this.firstNameRef.value.value,
          middleName: this.middleNameRef.value.value,
          lastName: this.lastNameRef.value.value,
          contactNumber: this.contactNumberRef.value.value,
          accountKey: this.accountKeyRef.value.value,
          done: true
        };
        this.props.addUser(user);
        // refresh the form
        event.currentTarget.reset();
    };
    render() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user.uid)
                var ref = firebase.database().ref("users");
                ref.orderByChild("done").equalTo(true).once("value",snapshot => {
                    if (snapshot.exists()){
                        console.log('redirect');
                        this.props.history.push(`/profile/${user.uid}`);
                    }
                });
            }
        })
        return (
            <form onSubmit={this.createUser}>
                <input
                    // hintText="First Name"
                    // floatingLabelText="First Name"
                    name="email"
                    placeholder="Email"
                    ref={this.emailRef}
                    type="text"
                />
                <input
                    // hintText="First Name"
                    // floatingplaceholderText="First Name"
                    name="password"
                    placeholder="Password"
                    ref={this.passwordRef}
                    type="password"
                />
                <input
                    // hintText="First Name"
                    // floatingplaceholderText="First Name"
                    name="rePassword"
                    placeholder="Re-type Password"
                    ref={this.rePasswordRef}
                    type="password"
                />
                <input
                    // hintText="First Name"
                    // floatingplaceholderText="First Name"
                    name="firstName"
                    placeholder="First Name"
                    ref={this.firstNameRef}
                    type="text"
                />
                <input
                    // hintText="Middle Name"
                    // floatingplaceholderText="Middle Name"
                    name="middleName"
                    placeholder="Middle Name"
                    ref={this.middleNameRef}
                    type="text"
                />
                <input
                    // hintText="Last Name"
                    // floatingplaceholderText="Last Name"
                    name="lastName"
                    placeholder="Last Name"
                    ref={this.lastNameRef}
                    type="text"
                />
                <input
                    // hintText="Contact Number"
                    // floatingplaceholderText="Contact Number"
                    name="contactNumber"
                    placeholder="Contact Number"
                    ref={this.contactNumberRef}
                    type="text"
                />
                <input
                    // hintText="Enter Your Account Key"
                    // floatingplaceholderText="Account Key"
                    name="accountKey"
                    placeholder="Account Key"
                    ref={this.accountKeyRef}
                    type="text"
                />
                <button type="submit">Finish</button>
            </form>
            
        );
    }
}

export default withRouter(RegisterForm);