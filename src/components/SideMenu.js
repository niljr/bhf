import React from 'react';
import Proptypes from 'prop-types';
// import firebase from 'firebase';
// import Drawer from '@material-ui/core/Drawer';
// import MenuItem from '@material-ui/core/MenuItem';
// import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
// import { '#FF9800', '#2196F3' } from '@material-ui/core/styles/colors';
// import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/lab/Slider';
// import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { options } from '../config/constants';
// import { transformObjectToArray } from '../helpers';

const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
    sliderLabel: {
        position: 'relative',
        display: 'block',
        lineHeight: '24px',
        fontFamily: 'Roboto, sans-serif',
        marginLeft: 15,
        // height: 30
    }
};

class SideMenu extends React.Component {

    static propTypes = {
        updateBoardingHouse: Proptypes.func
    };

    state = {
        selected: {
            exclusivity: 'none',
            district: 'all',
            hasAirconRooms: 'withoutAC',
            minRate: 0,
            maxRate: 0
        },
        testData: {}
    }

    // handleOnChange = (value, type) => {
    //     // const defaultValues = {
    //     //     exclusivity: 'none',
    //     //     district: 'all',
    //     //     hasAirconRooms: 'withoutAC',
    //     //     minRate: this.state.selected.minRate,
    //     //     maxRate: this.state.selected.maxRate
    //     // };

    //     // await this.setState({ selected: defaultValues });
    //     let { selected } = this.state;

    //     selected[type] = value;
    //     this.props.updateBoardingHouse(this.state.selected)
    //     // this.setState({ selected });
    // }

    handleReset = async () => {
        await this.setState({
            selected: {
                exclusivity: 'none',
                district: 'all',
                hasAirconRooms: 'withoutAC',
                minRate: 0,
                maxRate: 0
            },
        });
    }

    handleOnChange = (value, type) => {
        let { selected } = this.state;

        selected[type] = value;
        
        this.setState({ selected });
        // console.log(selected)
        this.props.updateBoardingHouse(type, selected)
    }

     filterData = () => {
        // let { exclusivity, district, hasAirconRooms } = this.state.selected;
        // const ref = firebase.database().ref("boardingHouses");
        // ref.once('value', function(snapshot) {
        //     let childData = {}
        //     snapshot.forEach(childSnapshot => {
        //     //   var childKey = childSnapshot.key;
        //        childData = childSnapshot.val();
        //       // ...
        //     });
        //     // this.setState({ testData: childData })
        //   });

        // console.log(this.state.testData)
        // ref.orderByChild("district").equalTo(district).on("child_added", function(snapshot) {
            
        // });
        // ref.orderByChild("has_aircon_rooms").equalTo(hasAirconRooms).on("child_added", function(snapshot) {
        // });
        // libraries = libraries.filter(function(i) {
        //             return i.district.toLowerCase().match( searchString );
        //         });

        // if(data.district === data2 && data.has_aircon_rooms === data3 ) {
        //     return data;
        // }

    }

    fetchExclusivity = () => {
        
    }

    handleReset = async () => {
        await this.setState({
            selected: {
                exclusivity: 'none',
                district: 'all',
                hasAirconRooms: 'withoutAC',
                minRate: 0,
                maxRate: 0
            },
        });
    }
    render() {
        return (
            <div style={{ display: 'flex', 'flexDirection': 'row' }}>
                <List>
                    <RadioGroup
                        name="exclusivity" 
                        style={{ marginLeft: 20}}
                        value={this.state.selected.exclusivity}
                        onChange={(e, value) => this.handleOnChange(value, 'exclusivity')}>
                        {options.exclusivity.map(item =>
                            <FormControlLabel 
                                key={item.value} 
                                value={item.value} 
                                control={<Radio />} 
                                label={item.label}  
                                style={styles.radio}
                            />
                        )}
                    </RadioGroup>

                    <Divider />
                    <br />

                    <RadioGroup
                        name="districtName"
                        style={{ marginLeft: 20 }}
                        value={this.state.selected.district}
                        onChange={(e, value) => this.handleOnChange(value, 'district')}>
                        {options.district.map(item =>
                            <FormControlLabel 
                                key={item.value} 
                                value={item.value} 
                                control={<Radio />} 
                                label={item.label}  
                                style={styles.radio}
                            />
                        )}
                    </RadioGroup>

                    <Divider />
                    <br />

                    <RadioGroup
                        name="hasAirconRooms"
                        style={{ marginLeft: 20 }}
                        value={this.state.selected.hasAirconRooms}
                        onChange={(e, value) => this.handleOnChange(value, 'hasAirconRooms')}>
                        {options.hasAirconRooms.map(item =>
                            <FormControlLabel 
                                key={item.value} 
                                value={item.value} 
                                control={<Radio />} 
                                label={item.label}  
                                style={styles.radio}
                            />
                        )}
                    </RadioGroup>

                    <Divider />
                    <p style={styles.sliderLabel}>Min Rate {this.state.selected.minRate}</p>
                    <Slider
                        min={0}
                        max={10000}
                        value={this.state.selected.minRate}
                        step={500}
                        onChange={(e, value) => {(value >= 0) && this.handleOnChange(value, 'minRate')}}
                        style={{ width: 120, marginLeft: 20 }}/>
                    <br />
                    <p style={styles.sliderLabel}>Max Rate {this.state.selected.maxRate}</p>
                    <Slider
                        min={0}
                        max={10000}
                        value={this.state.selected.maxRate}
                        step={500}
                        onChange={(e, value) => {(value >= 0) && this.handleOnChange(value, 'maxRate')}}
                        style={{ width: 120, marginLeft: 20 }}/>
                    <Divider />
                    <br />
                    {/* <center>
                        <Button
                            label="RESET"
                            primary={true}
                            onClick={this.handleReset}     
                        />
                    </center> */}
                </List>
            </div>
        );
    }
}

export default SideMenu;