import preloader from '../../../images/loader.gif';
import React from 'react';

function Preloader(): JSX.Element {
  return <img src={ preloader } alt="Loader"/>;
}

export default Preloader;
