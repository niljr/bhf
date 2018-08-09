import React from 'react';
import firebase from 'firebase';
import { withRouter } from 'react-router-dom';

import Header from '../components/Header';
import RegisterForm from '../components/RegisterForm';

class RegisterContainer extends React.Component {    
    addUser = userFormData => {
        console.log(userFormData.accountKey)
        let ref = firebase.database().ref().child('boardingHouses');
        ref.orderByChild("account_key").equalTo(userFormData.accountKey).once("value",snapshot => {
            if (snapshot.exists()){
                console.log(userFormData)
                 firebase.auth().createUserWithEmailAndPassword(userFormData.email, userFormData.password)
                .then(
                    //  firebase.auth().onAuthStateChanged((user) =>  {
                    //     if (user) {
                    //       console.log(user.uid);
                    //     } else {
                    //         console.log('error')
                    //     }
                    //   })
                    this.addUserToDatabase(userFormData)
                ).catch(function(error) {
                    // Handle Errors here.
                    // var errorCode = error.code;
                    // var errorMessage = error.message;
                    // ...
                });
            } else {
                alert('account key does not exist')
                return
            }
        });
    };

    addUserToDatabase = (userFormData) => {
        let uid = Date.now().toString();
        console.log(uid)
        firebase.database().ref(`users/${uid}`).set({
            first_name: userFormData.firstName,
            middle_name: userFormData.middleName,
            last_name: userFormData.lastName,
            contact_number: userFormData.contactNumber,
            key_number: userFormData.accountKey,
            done: userFormData.done
        })
        this.props.history.push(`/profile/${uid}`);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <RegisterForm addUser={this.addUser}/>
            </React.Fragment>
        );
    }
}

export default withRouter(RegisterContainer);