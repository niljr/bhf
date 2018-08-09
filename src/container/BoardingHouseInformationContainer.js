import React from 'react';

import Header from '../components/Header';
import BoardingHouseInformation from '../components/BoardingHouseInformation';

class BoardingHouseInformationContainer extends React.Component {
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <Header />
                <BoardingHouseInformation bhs={this.props.location.data}/>
            </React.Fragment>
        );
    }
}

export default BoardingHouseInformationContainer;