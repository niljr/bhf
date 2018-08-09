import React from "react";
// import PropTypes from "prop-types";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class BoardingHouse extends React.Component {
//   static propTypes = {
//     details: PropTypes.shape({
//       image: PropTypes.string,
//       name: PropTypes.string,
//       desc: PropTypes.string,
//       status: PropTypes.string,
//       price: PropTypes.number
//     }),
//     addToOrder: PropTypes.func
//   };
  render() {
    const { boarding_house_name,
            certificate_number, 
            // date, 
            district, 
            // exclusivity,
            // full_address, 
            // has_aircon_rooms,
            // kind_of_business,
            // location,
            // max_rate,
            // min_rate,
            // number_of_rooms,
            permit_number,
            _id
        } = this.props.details;
    const newTo = { 
        pathname: `/edit-boarding-house-form/${_id}`, 
        data: this.props.details
    };
    return (
        <TableRow>
            <TableCell component="th" scope="row">
            {boarding_house_name}
            </TableCell>
            <TableCell numeric>{district}</TableCell>
            <TableCell numeric>{permit_number}</TableCell>
            <TableCell numeric>{certificate_number}</TableCell>
            {/* <TableCell numeric>{date}</TableCell> */}
            <TableCell numeric><Link to={newTo}><Button variant="contained">Settings</Button></Link></TableCell>
            {/* <TableCell numeric><Button variant="contained" color="secondary">Delete</Button></TableCell> */}
        </TableRow>
    );
  }
}

export default BoardingHouse;
