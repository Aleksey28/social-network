import ProfileStatus from './ProfileStatus';
import { cleanup, render } from '@testing-library/react';
import { expect } from 'chai';

describe( 'Profile status', () => {
  afterEach( cleanup );

  it( 'Should display <span> after creation with correct status', () => {
    const status = 'I\'m the best';
    const { queryByText } = render( <ProfileStatus status={ status }/> );

    expect( queryByText( status, { selector: 'span' } ) ).not.null;
  } );
} );
