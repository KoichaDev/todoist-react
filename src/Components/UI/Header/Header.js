import React from 'react';
import Form from './Form';
import classes from './Header.module.scss';

function Header() {
  return (
    <header className={classes.header}>
      <i className='fas fa-bars fa-lg	'></i>
      <i className='fas fa-home fa-lg	'></i>
      <Form />
    </header>
  );
}

export default Header;
