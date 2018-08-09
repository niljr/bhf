import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
// import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing.unit * 3,
    },
    group: {
      margin: `${theme.spacing.unit}px 0`,
    },
  });


class EditBoardingHouseForm extends React.Component {
    accountKeyRef = React.createRef();
    bhNameRef = React.createRef();
    kindOfBusinessRef = React.createRef();
    districtRef = React.createRef();
    fullAddressRef = React.createRef();
    numberOfRoomsRef = React.createRef();
    minRateRef = React.createRef();
    maxRateRef = React.createRef();
    exclusivityRef = React.createRef();
    hasAirconRoomsRef = React.createRef();
    permitNumberRef = React.createRef();
    certificateNumberRef = React.createRef();
    dateRef = React.createRef();
    latitudeRef = React.createRef();
    longitudeRef = React.createRef();

    state = {
        kindOfBusiness: 'Boarding House',
        district: 'Jaro',
        exclusivity: 'Male Only',
        hasAirconRooms: 'Yes'

    };
    
    static propTypes = {
        updateBoardingHouse: PropTypes.func,
        deleteBoardingHouse: PropTypes.func,
    };

    handleChangeKindOfBusiness = event => {
        this.setState({ kindOfBusiness: event.target.value });
    };
    handleChangeDistrict = event => {
        this.setState({ district: event.target.value });
    };
    handleChangeExclusivity = event => {
        this.setState({ exclusivity: event.target.value });
    };
    handleChangeHasAirconRooms = event => {
        this.setState({ hasAirconRooms: event.target.value });
    };
    
    
    UpdateBoardingHouse = event => {
        //1. stop the form from submitting
        event.preventDefault();
        const boardingHouse = {
            accountKey: this.accountKeyRef.current.value,
            bhName: this.bhNameRef.current.value,
            kindOfBusiness: this.state.kindOfBusiness,
            district: this.state.district,
            fullAdress: this.fullAddressRef.current.value,
            numberOfRooms: this.numberOfRoomsRef.current.value,
            minRate: this.minRateRef.current.value,
            maxRate: this.maxRateRef.current.value,
            exclusivity: this.state.exclusivity,
            hasAirconRooms: this.state.hasAirconRooms,
            permitNumber: this.permitNumberRef.current.value,
            certificateNumber: this.certificateNumberRef.current.value,
            date: this.dateRef.current.value,
            latitude: this.latitudeRef.current.value,
            longitude: this.longitudeRef.current.value,
        };
        console.log(boardingHouse);
        this.props.updateBoardingHouse(boardingHouse);
        //   refresh the form
        event.currentTarget.reset();
    }
    
    render() {
        const { 
            account_key,
            boarding_house_name,
            certificate_number, 
            date, 
            // district, 
            // exclusivity,
            full_address, 
            // has_aircon_rooms,
            // kind_of_business,
            location,
            max_rate,
            min_rate,
            number_of_rooms,
            permit_number,
            // _id
        } = this.props.boardingHouseData;
        return (
            <div>
            <Paper>
                <List>
                    <form onSubmit={this.UpdateBoardingHouse}>
                        <input
                            name="accountKey"
                            label="Account Key"
                            ref={this.accountKeyRef}
                            defaultValue={account_key}
                            type="text"
                        />
                        <input
                            name="bhName"
                            label="Boarding House Name"
                            ref={this.bhNameRef}
                            defaultValue={boarding_house_name}
                            type="text"
                        />
                        <Divider />
                        <div>
                            <FormControl component="fieldset" required style={styles.formControl}>
                                <FormLabel component="legend">Kind of Business:</FormLabel>
                                <RadioGroup
                                    aria-label="Kind of Business"
                                    name="kindOfBusiness"
                                    style={styles.group}
                                    value={this.state.kindOfBusiness}
                                    // ref={this.kindOfBusinessRef}
                                    onChange={this.handleChangeKindOfBusiness}
                                >
                                    <FormControlLabel value="boardingHouse" control={<Radio />} label="Boarding House" />
                                    <FormControlLabel value="apartment" control={<Radio />} label="Apartment" />
                                    <FormControlLabel value="dormitory" control={<Radio />} label="Dormitory" />
                                    <FormControlLabel value="combinedBusiness" control={<Radio />} label="Combined Business" />
                                </RadioGroup>
                            </FormControl>
                            <FormControl component="fieldset" required style={styles.formControl}>
                                <FormLabel component="legend">District:</FormLabel>
                                <RadioGroup
                                    aria-label="District"
                                    name="district"
                                    style={styles.group}
                                    value={this.state.district}
                                    // ref={this.districtRef}
                                    onChange={this.handleChangeDistrict}
                                >
                                    <FormControlLabel value="jaro" control={<Radio />} label="Jaro" />
                                    <FormControlLabel value="lapaz" control={<Radio />} label="Lapaz" />
                                    <FormControlLabel value="lapuz" control={<Radio />} label="Lapuz" />
                                    <FormControlLabel value="cityProper" control={<Radio />} label="City Proper" />
                                    <FormControlLabel value="mandurriao" control={<Radio />} label="Mandurriao" />
                                    <FormControlLabel value="villaArrevalo" control={<Radio />} label="Villa Arrevalo" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider />
                        <input
                            name="fullAdress"
                            placeholder="Full Address"
                            ref={this.fullAddressRef}
                            defaultValue={full_address}
                            type="text"
                        />
                        <Divider />
                        <input
                            name="numberOfRooms"
                            placeholder="Number of Rooms"
                            ref={this.numberOfRoomsRef}
                            defaultValue={number_of_rooms}
                            type="text"
                        />
                        <Divider />
                        <input
                            name="minRate"
                            placeholder="Minimum rate"
                            ref={this.minRateRef}
                            defaultValue={min_rate}
                            type="text"
                        />
                        <Divider />
                        <input
                            name="maxRate"
                            placeholder="Maximum rate"
                            ref={this.maxRateRef}
                            defaultValue={max_rate}
                            type="text"
                        />
                        <Divider />
                        <input
                            name="certificateNumber"
                            placeholder="Certificate Number"
                            ref={this.certificateNumberRef}
                            defaultValue={certificate_number}
                            type="text"
                        />
                        <Divider />
                        <div>
                            <FormControl component="fieldset" required style={styles.formControl}>
                                <FormLabel component="legend">Exclusivity:</FormLabel>
                                <RadioGroup
                                    aria-label="Exclusivity"
                                    name="exclusivity"
                                    style={styles.group}
                                    value={this.state.exclusivity}
                                    // ref={this.exclusivityRef}
                                    onChange={this.handleChangeExclusivity}
                                >
                                    <FormControlLabel value="male" control={<Radio />} label="Male Only" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female Only" />
                                    <FormControlLabel value="none" control={<Radio />} label="No Exclusivity" />
                                </RadioGroup>
                            </FormControl>
                            <FormControl component="fieldset" required style={styles.formControl}>
                                <FormLabel component="legend">Has Aircon Rooms?</FormLabel>
                                <RadioGroup
                                    aria-label="Has Aircon Rooms?"
                                    name="hasAirconRooms"
                                    style={styles.group}
                                    value={this.state.hasAirconRooms}
                                    // ref={this.hasAirconRoomsRef}
                                    onChange={this.handleChangeHasAirconRooms}
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider />
                        <input
                            name="permitNumber"
                            placeholder="Permit Number"
                            ref={this.permitNumberRef}
                            defaultValue={permit_number}
                            type="text"
                        />
                        <Divider />
                        <input
                            id="date"
                            placeholder="Birthday"
                            type="date"
                            defaultValue={date}
                            ref={this.dateRef}
                            // InputLabelProps={{
                            // shrink: true,
                            // }}
                        />
                        <Divider />
                        <input
                            name="latitude"
                            placeholder="Latitude"
                            type="text"
                            ref={this.latitudeRef}
                            defaultValue={location.latitude}
                        />
                        <Divider />
                        <input
                            name="longitude"
                            placeholder="Longitude"
                            type="text"
                            ref={this.longitudeRef}
                            defaultValue={location.longitude}
                        />
                        <Divider />
                        <button type="submit">Save</button>
                    </form>
                    <Button variant="contained" color="secondary" onClick={this.props.deleteBoardingHouse}>Delete</Button>
                </List>
            </Paper>
            </div>
        );
    }
}

export default EditBoardingHouseForm;