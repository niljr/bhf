import React from 'react';
import firebase from 'firebase';

import AddBoardingHouseForm from '../components/AddBoardingHouseForm';
import Header from '../components/Header';

class AddBoardingHouseContainer extends React.Component {

    addBoardingHouse = boardingHouseFormData => {
        firebase.database().ref(`boardingHouses/${Date.now()}`).set({
            account_key: boardingHouseFormData.accountKey,
            boarding_house_name: boardingHouseFormData.bhName,
            kind_of_business: boardingHouseFormData.kindOfBusiness,
            district: boardingHouseFormData.district,
            full_address: boardingHouseFormData.fullAdress,
            number_of_rooms: boardingHouseFormData.numberOfRooms,
            min_rate: boardingHouseFormData.minRate,
            max_rate: boardingHouseFormData.maxRate,
            exclusivity: boardingHouseFormData.exclusivity,
            has_aircon_rooms: boardingHouseFormData.hasAirconRooms,
            permit_number: boardingHouseFormData.permitNumber,
            certificate_number: boardingHouseFormData.certificateNumber,
            date: boardingHouseFormData.date,
            location: {
                latitude: boardingHouseFormData.latitude,
                longitude: boardingHouseFormData.longitude
            },
            _id: Date.now()
        })
        this.props.history.goBack();
    };
     render() {
         return (
            <React.Fragment>
                <Header />
                <AddBoardingHouseForm addBoardingHouse={this.addBoardingHouse}/>
            </React.Fragment>
         );
     }
 }
 export default AddBoardingHouseContainer