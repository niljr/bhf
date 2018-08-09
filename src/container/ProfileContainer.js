import React from 'react';
// import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
// import firebase from 'firebase';
// Components
import Header from '../components/Header';
import ProfileTable from '../components/ProfileTable';
import ProfileUser from '../components/ProfileUser';
// import SearchBar from '../components/SearchBar';
import base, { firebaseApp }  from '../base';


class ProfileContainer extends React.Component {

    state = {
        isSignedIn: false,
        userId: '',
        boardingHouses: {}
    }

    componentDidMount() {
        firebaseApp.auth().onAuthStateChanged(user =>  {
            this.setState({userId: user.uid, isSignedIn: true})
        });
        this.ref = base.syncState('/boardingHouses', {
            context: this,
            state: "boardingHouses"
        });
    }

    updateBoardingHouse = (key, updatedBoardingHouse) => {
        // 1. Take a copy of the current state
        const boardingHouses = { ...this.state.boardingHouses };
        // 2. Update that state
        boardingHouses[key] = updatedBoardingHouse;
        // 3. Set that to state
        this.setState({ boardingHouses });
    };

    render() {
        
        if (!this.state.userId) {
            return <h1>loading</h1>
        }
        return (
            <React.Fragment>
                <Header isSignedIn={this.state.isSignedIn}/>
                    <div>
                        {this.state.userId === 'BcS4TTJL1gQnwvMHY6POvvvRClJ3' ?
                            <div>
                                {/* <SearchBar boardingHouses={this.state.boardingHouses} updateBoardingHouse={this.updateBoardingHouse}/> */}
                                <Link to="/add-boarding-house-form"><button>Add Boarding House</button></Link>
                                <ProfileTable boardingHouses={this.state.boardingHouses}/>
                            </div> 
                            :
                            <ProfileUser />
                        }
                    </div>    
            </React.Fragment>
        );
    }
}

export default ProfileContainer;