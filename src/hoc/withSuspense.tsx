import React, { Suspense } from 'react';
import Preloader from '../components/common/Preloader/Preloader';

const withSuspense = (Component: any) => {
  return (props: any) => {
    return <Suspense fallback={<Preloader/>}>
      <Component {...props}/>
    </Suspense>;
  };
}

export default withSuspense;
