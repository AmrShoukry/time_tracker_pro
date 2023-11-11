import '../styles/Logout.css';
import { useState, useEffect } from 'react';

const Logout = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--nav-width', '0px');
    document.body.style.paddingLeft = '0';
  }, []);

  return (
    <div className="container">
      <h1>Logout</h1>
    </div>
  );
};

export default Logout;
