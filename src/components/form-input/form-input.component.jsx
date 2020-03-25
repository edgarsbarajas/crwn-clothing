import React from 'react';
import classNames from 'classnames';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {
      label ? (
        <label className={classNames("form-input-label", {
          "shrink": otherProps.value.length
        })}>
          {label}
        </label>
      ) : null
    }
  </div>
);

export default FormInput;