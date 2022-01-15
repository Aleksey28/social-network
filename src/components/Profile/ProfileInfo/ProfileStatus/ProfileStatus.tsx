import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserStatus } from '../../../../redux/profile/reducer';
import { getUserStatusState } from '../../../../redux/profile/selector';
import { Typography } from 'antd';

const { Text } = Typography;

interface PropsType {
  isOwner: boolean;
}

const ProfileStatus: React.FC<PropsType> = ({ isOwner }) => {
  const dispatch = useDispatch();
  const status   = useSelector(getUserStatusState);

  const handleChangeStatus = (value: string) => {
    if (value !== status) {
      dispatch(updateUserStatus(value));
    }
  };
  
  return (
    <div>
      <Text editable={{
        tooltip:     false,
        onChange:    handleChangeStatus,
        triggerType: isOwner ? ['text'] : [],
      }}>{status}</Text>
    </div>
  );
};

export default ProfileStatus;
