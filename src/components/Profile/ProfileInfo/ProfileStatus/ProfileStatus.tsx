import React, { useEffect, useState } from 'react';
import { KEY_ENTER } from '../../../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserStatus } from '../../../../redux/profile/reducer';
import { getUserStatusState } from '../../../../redux/profile/selector';

const ProfileStatus: React.FC = () => {
  const dispatch                      = useDispatch();
  const status                        = useSelector(getUserStatusState);
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
    dispatch(updateUserStatus(statusState));
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
