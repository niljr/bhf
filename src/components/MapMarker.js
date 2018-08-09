import React from 'react';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styles from '../css/map-marker-styles'



class MapMaker extends React.Component {

    state = {
        pinToggle: {},
    }

    onToggleOpen = (id, isOpen = true) => {
        let { pinToggle } = this.state;
        const isToggled = pinToggle[id] ? false : isOpen;

        pinToggle[id] = isToggled;
        this.setState({ pinToggle });
    }

    render() {
        let { 
            // price,
            _id, 
            boarding_house_name, 
            exclusivity, 
            district,
            has_aircon_rooms,
            full_address,
            min_rate
        } = this.props.bhs;
        const newTo = {
            pathname: `/${_id}/information`,
            data: this.props.bhs
        }
        return (
            <div>
                <div style={styles.speechBubble} onClick={() => this.onToggleOpen(this.props.bhs._id)}>
                    <p style={{ color: 'white', fontSize: 12, textAlign: 'center' }}>₱{min_rate}</p>
                    <div style={styles.triangle} />
                </div>
                {this.state.pinToggle[_id] ?
                    <div style={styles.infoWindows}>
                        <div style={{ display: 'inline-flex' }}>
                            {/* <img src={marker.image} style={{ height: 100, width: 100 }} /> */}
                            <div style={styles.infoDetails}>
                                <h2 style={{ marginTop: 0, marginBottom: 10 }}>{boarding_house_name} {exclusivity} {district}</h2>
                                <p style={{ fontSize: 14 }}>
                                    {full_address}
                                    <br />
                                    <b>{has_aircon_rooms ? "With Aircon" : "Without Aircon"}</b>
                                </p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', marginTop: '1.3em', justifyContent: 'space-between' }}>
                            <p style={{ fontSize: 16, color: '#00BCD4', marginBottom: 0 }}>₱{min_rate}</p>
                            {/* <Button label="VIEW" primary={true} /> */}
                            <Link to={newTo}><button>test</button></Link>
                        </div>
                    </div>
                    : null}
            </div>
        );
    }
}

export default MapMaker;