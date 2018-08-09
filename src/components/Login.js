import React from 'react';
import { Link } from 'react-router-dom'
import "../css/login.css";

class Login extends React.Component {
    emailRef = React.createRef();
    passwordRef = React.createRef();

    // The component's Local state.
    state = {
        isSignedIn: false ,// Local signed-in state.
        userId: ''
    };

    loginUser = event => {
        event.preventDefault();
        const user = {
            email: this.emailRef.value.value,
            password: this.passwordRef.value.value
        };
        this.props.loginUser(user);
        event.currentTarget.reset();
    }

    render() {
        return (
            <React.Fragment>
                {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseApp.auth()}/> */}
                <hgroup>
                <h1>Boarding House Finder</h1>
                <h3>By Thesis team</h3>
                </hgroup>
                <form onSubmit={this.loginUser}>
                    <div className="group">
                        <input
                            name="email"
                            ref={this.emailRef}
                            type="text"
                            required
                        />
                            <span className="hightlight"></span><span className="bar"></span>
                            <label>Email</label>
                    </div>
                    <div className="group">
                        <input
                            name="password"
                            ref={this.passwordRef}
                            type="password"
                            required
                        />
                            <span className="hightlight"></span><span className="bar"></span>
                            <label>Password</label>
                    </div>
                    <button type="submit" className="button buttonBlue">Login
                        <div className="ripples buttonRipples"><span className="ripplesCircle"></span></div>
                    </button>
                </form>
                <div className="register__form">
                    <Link to="/register-form">Register</Link>
                </div>
             </React.Fragment>
        );
      }
}

export default Login;