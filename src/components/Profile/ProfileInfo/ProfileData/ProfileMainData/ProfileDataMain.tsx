import React from 'react';
import { ProfileType } from '../../../../../types';
import { Button, Descriptions } from 'antd';
import classes from './ProfileDataMain.module.css';

interface PropsType {
  profileData: Partial<ProfileType>;
  isOwner: boolean;
  onEdit: () => void;
}

const ProfileDataMain: React.FC<PropsType> = ({
                                                profileData,
                                                isOwner,
                                                onEdit
                                              }) => {
  const { fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts } = profileData;

  const extra = isOwner ? <Button type="primary" onClick={onEdit}>Edit</Button> : void 0;

  return (
    <Descriptions title="Main" column={1} size="small" extra={extra}>
      <Descriptions.Item label="Name">{fullName}</Descriptions.Item>
      <Descriptions.Item label="About me">{aboutMe}</Descriptions.Item>
      <Descriptions.Item label="Looking for a job">{lookingForAJob}</Descriptions.Item>
      <Descriptions.Item label="Skills">{lookingForAJobDescription}</Descriptions.Item>
      <Descriptions.Item label="Contacts">
        <ul className={classes.contacts}>
          {!!contacts && Object.entries(contacts).reduce((res: JSX.Element[], [key, value]) => {
            if (value) {
              res.push(<li key={key}>{key}: {value}</li>);
            }

            return res;
          }, [])}
        </ul>
      </Descriptions.Item>
    </Descriptions>
  );
};

export default ProfileDataMain;
