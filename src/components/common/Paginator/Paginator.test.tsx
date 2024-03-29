import { cleanup, render } from '@testing-library/react';
import Paginator from './Paginator';

describe( 'Paginator', () => {
  afterEach( cleanup );

  it( 'Pages count is 11 but should be showed only 10', () => {
    const { queryAllByText } = render( <Paginator totalPagesCount={ 11 }
                                                  currentPage={ 1 }
                                                  pagesPortionSize={ 10 }
                                                  onClick={ () => {} }/> );
    expect( queryAllByText( /\d+/ ).length ).toEqual( 10 );
  } );

  it( 'Is pages count is more then 10 button next should be present', () => {
    const { queryByText } = render( <Paginator totalPagesCount={ 11 }
                                               currentPage={ 1 }
                                               pagesPortionSize={ 10 }
                                               onClick={ () => {} }/> );

    expect( queryByText( /next/i ) ).not.toBeNull();
  } );
} );
