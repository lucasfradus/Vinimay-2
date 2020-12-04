import React from 'react';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoadingSpinner = (props) => (
  <div className="loading">
    <FontAwesomeIcon icon={faSpinner} spin/> {props.translate('Contact-form.buttons.sending')}
  </div>
);

export default LoadingSpinner;
