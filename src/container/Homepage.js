import React from 'react';
import firebase from 'firebase/app';

import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import Map from '../components/Map';
// import base from "../base";
import { transformObjectToArray } from '../helpers';

class Homepage extends React.Component {
    state = {
        boardingHouses: {},
        tempBoardingHouses: {}
    }

    componentDidMount() {
        var ref = firebase.database().ref('boardingHouses');
        ref.on('value', snapshot => {
            let childData = {};
            snapshot.forEach(function(childSnapshot) {
                childData = snapshot.val();
            })
            // childData['exclusivity'] = 'none';
            this.setState({ boardingHouses: childData })
        })
    }

    getAllData = () => {
        var ref = firebase.database().ref('boardingHouses');
        ref.on('value', snapshot => {
            let childData = {};
            snapshot.forEach(function(childSnapshot) {
                childData = snapshot.val();
            })
            // childData['exclusivity'] = 'none';
            this.setState({ boardingHouses: childData })
        })
    }

    updateBoardingHouse = (type,updatedBoardingHouseData) => {
        let tempData = {}
        let c = []
        let s = []
        if( updatedBoardingHouseData.exclusivity === 'none' ) {
            console.log('1')
            this.getAllData();
        }

        const ref = firebase.database().ref("/boardingHouses");
        ref.orderByChild('exclusivity').equalTo(updatedBoardingHouseData.exclusivity).on("child_added", snapshot => {
            //  pass the data to tempData
            tempData[snapshot.key] = snapshot.val()
            // convert object to array
            c = transformObjectToArray(tempData);
            // save data to boardingHouses state
            this.setState({boardingHouses: tempData})
        });
        
        // filter state to find object that contain district
        {c.length > 0 ? c.filter(el => {
            if(updatedBoardingHouseData.district === el.district) {
                // let s = {};
                s[el._id] = el
                // c[el._id] = el;
                this.setState({ boardingHouses: s })
                console.log('1')
                
            } else {
                console.log('2')
                // this.getAllData();
            }
        }) : null};
        console.log(s)
        // filter the state to find from object tthat contain hasAirconRooms equal to
        {this.state.boardingHouses.length > 0 ? this.state.boardingHouses.filter(ha => {
            if ( ha.has_aircon_rooms === updatedBoardingHouseData.hasAirconRooms ) {
                let s = {};
                s[ha._id] = ha
                this.setState({ boardingHouses: s })
            }
        }) : null}; 
    }

    render() {
        console.log(this.state.boardingHouses)
        return (
            <div>
                <Header />
                <div style={{ display: 'flex' }}>
                <SideMenu updateBoardingHouse={this.updateBoardingHouse}/>
                <Map boardingHouses={this.state.boardingHouses}/>
            </div>
            </div>
        );
    }
}

export default Homepage;