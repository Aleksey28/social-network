import { InjectedFormProps, reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../../common/FormsControls/FormsControls';
import { required } from '../../../../utils/validators';
import React, { useState } from 'react';
import classes from './ProfileData.module.css';
import { Profile } from '../../../../types';

interface Props {
  profileData: Partial<Profile>;
  updateUserData: (userData: Profile) => Promise<void>;
}

type FormType = React.FC<InjectedFormProps<Profile>>;
type FormNames = Extract<keyof Profile, string>;

const ProfileDataForm: FormType = ({ handleSubmit, error, initialValues }) => {
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      Name: {createField<FormNames>('fullName', Input, [required], 'Full name')}
      About me: {createField<FormNames>('aboutMe', Textarea, [required], 'About me')}
      Looking for a job: {createField<FormNames>('lookingForAJob', Input, [], 'Looking for a job', 'checkbox')}
      Skills: {createField<FormNames>('lookingForAJobDescription', Input, [required], 'Skills')}
      Contacts:
      <ul>
        {!!initialValues.contacts && Object.keys(initialValues.contacts).map(key => (
          <li key={key}>
            {/*@ts-ignore*/}
            {key}: {createField<FormNames>(`contacts.${key}`, Input, [], key)}
          </li>
        ))}
      </ul>

      {error && <span className={classes.form__error}>{error}</span>}

      <button type="submit">Save</button>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm<Profile>({
  form: 'profileData',
})(ProfileDataForm);

const ProfileDataInfo: React.FC<Partial<Profile>> = ({
                                                       fullName,
                                                       aboutMe,
                                                       lookingForAJob,
                                                       lookingForAJobDescription,
                                                       contacts
                                                     }) => {
  return (
    <ul>
      <li>
        Name: {fullName}
      </li>
      <li>
        About me: {aboutMe}
      </li>
      <li>
        Looking for a job: {lookingForAJob}
      </li>
      <li>
        Skills: {lookingForAJobDescription}
      </li>
      <li>
        Contacts:
        <ul>
          {!!contacts && Object.entries(contacts).map(([key, value]) => (
            <li key={key}>{key}: {value}</li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

const ProfileData: React.FC<Props> = ({ profileData, updateUserData }) => {
  const [editMode, setEditMode] = useState(false);

  const activateEditMode = () => {
    setEditMode(true);
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

  const handleSubmit = (formData: Profile) => {
    updateUserData(formData).then(deactivateEditMode);
  };

  return (
    <div>
      <button onClick={handleClickOnEdit}>Edit</button>
      {editMode
       ? <ProfileDataReduxForm initialValues={profileData}
                               onSubmit={handleSubmit}/>
       : <ProfileDataInfo {...profileData}/>}
    </div>
  );
};

export default ProfileData;
