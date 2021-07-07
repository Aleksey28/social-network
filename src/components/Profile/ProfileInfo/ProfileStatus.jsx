import React, { useEffect, useState } from 'react';

const ProfileStatus = ( { status, updateUserStatus } ) => {

  const [editMode, setEditMode] = useState( false );
  const [status, setStatus] = useState( status );

  useEffect( () => {
    setStatus( status );
  }, [status] );

  const activateEditMode = () => {
    setEditMode( true );
  };

  const deactivateEditMode = () => {
    setEditMode( false );
    updateUserStatus( status );
  };

  const handleChangeStatus = ( e ) => {
    setStatus( e.currentTarget.value );
  };

  return (
    <div>
      { !editMode
        ? <span onClick={ activateEditMode }>{ status || '---' }</span>
        : <input value={ status }
                 onBlur={ deactivateEditMode }
                 onChange={ handleChangeStatus }
                 autoFocus={ true }/> }
    </div>
  );
};

export default ProfileStatus;
