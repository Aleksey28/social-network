import ProfileStatus from './ProfileStatus';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe( 'Profile status', () => {
  afterEach( cleanup );

  it( 'Should display <span> after creation with correct status', () => {
    const status = 'I\'m the best';
    const { queryByText } = render( <ProfileStatus status={ status }/> );

    expect( queryByText( status, { selector: 'span' } ) ).not.toBeNull();
  } );

  it( 'Should display <input> after creation with status', () => {
    const status = 'I\'m the best';
    const { queryByText } = render( <ProfileStatus status={ status }/> );

    expect( queryByText( status, { selector: 'input' } ) ).toBeNull();
  } );

  it( 'Should display <input> after creation with correct status in editMode', () => {
    const status = 'I\'m the best';
    const { queryByText, queryByDisplayValue } = render( <ProfileStatus status={ status }/> );

    userEvent.click( queryByText( status, { selector: 'span' } ) );

    expect( queryByDisplayValue( status ) ).not.toBeNull();
  } );
} );
