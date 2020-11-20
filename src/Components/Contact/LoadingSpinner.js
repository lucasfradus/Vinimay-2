import React from 'react';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoadingSpinner = () => (
  <div className="loading">
    <FontAwesomeIcon icon={faSpinner} spin/> Enviando
  </div>
);

export default LoadingSpinner;
