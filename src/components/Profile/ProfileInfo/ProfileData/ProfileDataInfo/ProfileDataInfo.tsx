import React from 'react';
import { ProfileType } from '../../../../../types';
import { EditOutlined } from '@ant-design/icons';
import { Button, Descriptions, Typography } from 'antd';
import classes from './ProfileDataInfo.module.css';

const { Title } = Typography;

interface PropsType {
  profileData: Partial<ProfileType>;
  isOwner: boolean;
  onEdit: () => void;
}

const ProfileDataInfo: React.FC<PropsType> = ({
                                                profileData,
                                                isOwner,
                                                onEdit
                                              }) => {
  const { fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts } = profileData;

  const extra = isOwner
                ? <Button type="text" onClick={onEdit} size="small" shape="circle" icon={<EditOutlined/>}/>
                : void 0;

  return (
    <Descriptions title={<Title level={5}>Info</Title>} column={1} size="small" extra={extra}>
      <Descriptions.Item label="Name">{fullName}</Descriptions.Item>
      <Descriptions.Item label="About me">{aboutMe}</Descriptions.Item>
      <Descriptions.Item label="Looking for a job">{lookingForAJob ? 'Yes' : 'No'}</Descriptions.Item>
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

export default ProfileDataInfo;
