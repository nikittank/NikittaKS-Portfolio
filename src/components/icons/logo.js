import React from 'react';
import logo from '@images/logo_N.png'; // adjust the path as needed

const IconLogo = () => (
  <img
    src={logo}
    alt="Logo"
    style={{
      width: '50px',
      height: '50px',
      objectFit: 'contain',
    }}
  />
);

export default IconLogo;
