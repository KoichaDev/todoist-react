import React from 'react';
import Form from './Form';
import classes from './Header.module.scss';

function Header() {
  return (
    <header className={classes.header}>
      <i class='fas fa-bars fa-lg	'></i>
      <i class='fas fa-home fa-lg	'></i>
      <Form />
    </header>
  );
}

export default Header;
