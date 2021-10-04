import React, { useEffect, useState } from 'react';
import { KEY_ENTER } from '../../../../utils/constants';

interface Props {
  status: string;
  updateUserStatus: (status: string) => void;
}

const ProfileStatus: React.FC<Props> = ({ status, updateUserStatus }) => {

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

  const handleChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatusState(e.currentTarget.value);
  };

  const handleKeyUpEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
