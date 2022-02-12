import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserStatus } from '../../../../redux/profile/reducer';
import { getUserStatusState } from '../../../../redux/profile/selector';
import { Typography } from 'antd';
import classes from './ProfileStatus.module.css';

const { Paragraph } = Typography;

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
    <div className={classes.status}>
      <Paragraph editable={{
        tooltip:     false,
        onChange:    handleChangeStatus,
        triggerType: isOwner ? ['text'] : [],
      }}>{status}</Paragraph>
    </div>
  );
};

export default ProfileStatus;
