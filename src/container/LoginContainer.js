import React from 'react';
import firebase from 'firebase';
import { withRouter } from 'react-router-dom'

import Header from '../components/Header';
import  Login  from '../components/Login';

class LoginContainer extends React.Component {

    state = {
        isSignedIn: false
    }

    loginUser = (loginUserData) => {
        firebase.auth().signInWithEmailAndPassword(loginUserData.email, loginUserData.password).then(() => (
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.setState({ isSignedIn: true })
                    this.props.history.push(`/profile/${user.uid}`)
                }
            })
        )).catch(function(error) {
            // // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // ...
          });
    }

    render() {
        return (
            <React.Fragment>
                <Header isSignedIn={this.state.isSignedIn}/>
                <div className="login__container">
                    <Login   loginUser={this.loginUser}/>
                    {/* <h1>register</h1> */}
                    {/* <Link to="/register-form">Register</Link> */}
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(LoginContainer);