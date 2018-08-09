import React from 'react';
import { Link } from 'react-router-dom';

const LeftMenu = () => (
    <div style={{width: 250}}>
        <Link to='/'>Home</Link>
        <Link to='/login'>DashBoard</Link>
        <Link to='/chart'>Chart</Link>
    </div>
)

export default LeftMenu
