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


class AddBoardingHouseForm extends React.Component {
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
        kindOfBusiness: 'boarding house',
        district: 'jaro',
        exclusivity: 'male',
        hasAirconRooms: 'yes'

    };
    
    static propTypes = {
        addBoardingHouse: PropTypes.func
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
    
    
    createBoardingHouse = event => {
        //1. stop the form from submitting
        event.preventDefault();
        const boardingHouse = {
            accountKey: this.accountKeyRef.value.value,
            bhName: this.bhNameRef.value.value,
            kindOfBusiness: this.state.kindOfBusiness,
            district: this.state.district,
            fullAdress: this.fullAddressRef.value.value,
            numberOfRooms: this.numberOfRoomsRef.value.value,
            minRate: this.minRateRef.value.value,
            maxRate: this.maxRateRef.value.value,
            exclusivity: this.state.exclusivity,
            hasAirconRooms: this.state.hasAirconRooms,
            permitNumber: this.permitNumberRef.value.value,
            certificateNumber: this.certificateNumberRef.value.value,
            date: this.dateRef.value.value,
            latitude: this.latitudeRef.value.value,
            longitude: this.longitudeRef.value.value,
        };
        console.log(boardingHouse);
        this.props.addBoardingHouse(boardingHouse);
        //   refresh the form
        event.currentTarget.reset();
    }
    
    render() {
        return (
            <div>
            <Paper>
                <List>
                    <form onSubmit={this.createBoardingHouse}>
                        <input
                            name="accountKey"
                            placeholder="Account Key"
                            type="text"
                            ref={this.accountKeyRef}
                        />
                        <input
                            name="bhName"
                            placeholder="Boarding House Name"
                            ref={this.bhNameRef}
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
                                    <FormControlLabel value="boarding house" control={<Radio />} label="Boarding House" />
                                    <FormControlLabel value="apartment" control={<Radio />} label="Apartment" />
                                    <FormControlLabel value="dormitory" control={<Radio />} label="Dormitory" />
                                    <FormControlLabel value="combined business" control={<Radio />} label="Combined Business" />
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
                                    <FormControlLabel value="city proper" control={<Radio />} label="City Proper" />
                                    <FormControlLabel value="mandurriao" control={<Radio />} label="Mandurriao" />
                                    <FormControlLabel value="villa arrevalo" control={<Radio />} label="Villa Arrevalo" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider />
                        <input
                            name="fullAdress"
                            placeholder="Full Address"
                            ref={this.fullAddressRef}
                            type="text"
                        />
                        <Divider />
                        <input
                            name="numberOfRooms"
                            placeholder="Number of Rooms"
                            ref={this.numberOfRoomsRef}
                            type="text"
                        />
                        <Divider />
                        <input
                            name="minRate"
                            placeholder="Minimum rate"
                            ref={this.minRateRef}
                            type="text"
                        />
                        <Divider />
                        <input
                            name="maxRate"
                            placeholder="Maximum rate"
                            ref={this.maxRateRef}
                            type="text"
                        />
                        <Divider />
                        <input
                            name="certificateNumber"
                            placeholder="Certificate Number"
                            ref={this.certificateNumberRef}
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
                                    <FormControlLabel value="withAC" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="withoutAC" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider />
                        <input
                            name="permitNumber"
                            placeholder="Permit Number"
                            ref={this.permitNumberRef}
                            type="text"
                        />
                        <Divider />
                        <input
                            id="date"
                            placeholder="Birthday"
                            type="date"
                            ref={this.dateRef}
                        />
                        <Divider />
                        <input
                            name="latitude"
                            placeholder="Latitude"
                            type="text"
                            ref={this.latitudeRef}
                        />
                        <Divider />
                        <input
                            name="longitude"
                            placeholder="Longitude"
                            type="text"
                            ref={this.longitudeRef}
                        />
                        <Divider />
                        <button type="submit">Save</button>
                    </form>
                </List>
            </Paper>
            </div>
        );
    }
}

export default AddBoardingHouseForm;