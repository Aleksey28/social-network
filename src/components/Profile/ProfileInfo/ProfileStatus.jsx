import React, { useEffect, useState } from 'react';

const ProfileStatus = ( { status, updateUserStatus } ) => {

  const [editMode, setEditMode] = useState( false );
  const [statusState, setStatusState] = useState( status );

  useEffect( () => {
    setStatusState( status );
  }, [status] );

  const activateEditMode = () => {
    setEditMode( true );
  };

  const deactivateEditMode = () => {
    setEditMode( false );
    updateUserStatus( statusState );
  };

  const handleChangeStatus = ( e ) => {
    setStatusState( e.currentTarget.value );
  };

  return (
    <div>
      { !editMode
        ? <span onClick={ activateEditMode }>{ statusState || '---' }</span>
        : <input value={ statusState }
                 onBlur={ deactivateEditMode }
                 onChange={ handleChangeStatus }
                 autoFocus={ true }/> }
    </div>
  );
};

export default ProfileStatus;
