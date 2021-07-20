import { cleanup, render } from '@testing-library/react';
import Paginator from './Paginator';

describe( 'Paginator', () => {
  afterEach( cleanup );

  it( 'Pages count is 11 but should be showed only 10', () => {
    const { queryAllByText } = render( <Paginator totalItemsCount={ 11 }
                                                  currentItem={ 1 }
                                                  itemsProtionSize={ 10 }
                                                  onClick={ () => {} }/> );
    expect( queryAllByText( /\d+/ ).length ).toEqual( 10 );
  } );
} );
