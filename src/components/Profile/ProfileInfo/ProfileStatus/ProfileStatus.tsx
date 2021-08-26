import React, { useEffect, useState } from 'react';
import { KEY_ENTER } from '../../../../utils/constants';

interface ProfileStatus {
  status: string;
  updateUserStatus: any;
}

const ProfileStatus = ({ status, updateUserStatus }: ProfileStatus): JSX.Element => {

  const [editMode, setEditMode]       = useState(false);
  const [statusState, setStatusState] = useState(status);

  useEffect(() => {
    setStatusState(status);
  }, [status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    updateUserStatus(statusState);
  };

  const handleChangeStatus = (e: any) => {
    setStatusState(e.currentTarget.value);
  };

  const handleKeyUpEnter = (e: any) => {
    if (e.key === KEY_ENTER) {
      deactivateEditMode();
    }
  };

  return (
    <div>
      {!editMode
       ? <span onClick={activateEditMode}>{statusState || '---'}</span>
       : <input value={statusState}
                onBlur={deactivateEditMode}
                onKeyUp={handleKeyUpEnter}
                onChange={handleChangeStatus}
                autoFocus={true}/>}
    </div>
  );
};

export default ProfileStatus;
