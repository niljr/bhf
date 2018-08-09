 import React from "react";
import firebase from "firebase";
import { withRouter } from 'react-router-dom';

import EditBoardingHouseForm from "../components/EditBoardingHouseForm";
import Header from "../components/Header";

class EditBoardingHouseContainer extends React.Component {
    state = {
        id: this.props.match.params.boardingHouseId
    }
    updateBoardingHouse = boardingHouseFormData => {
        // const index = this.props.match.params.boardingHouseId;
        firebase.database().ref().child(`boardingHouses/${this.state.id}`)
        .update({ 
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
            }
        });
        // will return to profile after updating.
        this.props.history.goBack();
    };

    deleteBoardingHouse = () => {
        console.log('success');
        //delete the boarding house post
        firebase.database().ref().child(`boardingHouses/${this.state.id}`).remove();
        // will return to profile after updating.
        this.props.history.goBack();
    }

  render() {
    // console.log(this.props.match.params.boardingHouseId);
    const boardingHouseDataFromRouter = this.props.location.data;
    return (
      <React.Fragment>
        <Header />
        <EditBoardingHouseForm
          index={this.state.id}
          boardingHouseData={boardingHouseDataFromRouter}
          updateBoardingHouse={this.updateBoardingHouse}
          deleteBoardingHouse={this.deleteBoardingHouse}
        />
      </React.Fragment>
    );
  }
}
export default withRouter(EditBoardingHouseContainer);
