import { Suspense } from 'react';
import Preloader from '../components/common/Preloader/Preloader';

function SuspenseWrap( { children } ) {
  return <Suspense fallback={ Preloader }>
    { children }
  </Suspense>;
}

export default SuspenseWrap;
