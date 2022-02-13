import React, { useEffect, useState } from 'react';
import { ProfileType } from '../../../../types';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData } from '../../../../redux/profile/reducer';
import { getIsValid } from '../../../../redux/profile/selector';
import ProfileDataInfoForm from './ProfileDataInfo/ProfileDataInfoForm';
import ProfileDataInfo from './ProfileDataInfo/ProfileDataInfo';

interface PropsType {
  profileData: ProfileType;
  isOwner: boolean;
}

const ProfileData: React.FC<PropsType> = ({ profileData, isOwner }) => {
  const dispatch                = useDispatch();
  const isValid                 = useSelector(getIsValid);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setEditMode(!isValid);
  }, [isValid]);

  const activateEditMode = () => {
    setEditMode(isOwner && true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
  };

  const handleClickOnEdit = () => {
    if (editMode) {
      deactivateEditMode();
    }
    else {
      activateEditMode();
    }
  };

  const handleSubmit = (formData: ProfileType) => {
    dispatch(updateUserData(formData));
    deactivateEditMode();
  };

  return (
    <div>
      {editMode
       ? <ProfileDataInfoForm initialValues={profileData} onSubmit={handleSubmit} onCancel={handleClickOnEdit}/>
       : <ProfileDataInfo profileData={profileData} isOwner={isOwner} onEdit={handleClickOnEdit}/>}
    </div>
  );
};

export default ProfileData;
