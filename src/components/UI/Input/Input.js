import React from 'react';

const Input = (props) => {
    return (
        <div
        className={`${props.classes.control} ${
          props.emailState.isValid === false ? props.classes.invalid : ''
        }`}
      >
        <label htmlFor="email">E-Mail</label>
        <input
          type="email"
          id="email"
          value={props.emailState.value}
          onChange={props.emailChangeHandler}
          onBlur={props.validateEmailHandler}
        />
      </div>
    )

}


export default Input;