import React from 'react';
import classNames from 'classnames';

import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps }) => (
  <button className={classNames("custom-button", { 
    "google-sign-in": otherProps.isGoogleSignIn
  })} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;