import React from 'react';
import classes from './Form.module.scss';

function Form() {
  return (
    <form className={classes.form}>
      <label htmlFor='search-todo' />

      <div className={classes['form__search']}>
        <i class='fas fa-search'></i>
        <input type='text' id='search-todo' placeholder='Search' />
      </div>
    </form>
  );
}

export default Form;
