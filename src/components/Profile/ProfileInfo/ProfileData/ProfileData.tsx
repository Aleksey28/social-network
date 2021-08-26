import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../../common/FormsControls/FormsControls';
import { required } from '../../../../utils/validators';
import React, { useState } from 'react';
import classes from './ProfileData.module.css';
import { Profile } from '../../../../types';

interface ProfileDataFormProps {
  handleSubmit: any;
  error: string;
  profileData: Profile;
}

interface ProfileDataProps {
  profileData: Profile;
  updateUserData: any;
}

const ProfileDataForm = ({ handleSubmit, error, profileData }: ProfileDataFormProps): JSX.Element => {
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      Name: <Field name="fullName"
                   placeholder="Full name"
                   component={Input}
                   validate={[required]}/>
      About me: <Field name="aboutMe"
                       placeholder="About me"
                       component={Textarea}
                       validate={[required]}/>
      Looking for a job: <Field name="lookingForAJob"
                                type="checkbox"
                                placeholder="Looking for a job"
                                component={Input}/>
      Skills: <Field name="lookingForAJobDescription"
                     placeholder="Skills"
                     component={Input}
                     validate={[required]}/>
      Contacts:
      <ul>
        {Object.keys(profileData.contacts).map(key => (
          <li key={key}>
            {key}: <Field name={`contacts.${key}`}
                          placeholder={key}
                          component={Input}/>
          </li>
        ))}
      </ul>

      {error && <span className={classes.form__error}>{error}</span>}

      <button type="submit">Save</button>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({
  form: 'profileData',
// @ts-ignore
})(ProfileDataForm);

const ProfileDataInfo = ({
                           fullName,
                           aboutMe,
                           lookingForAJob,
                           lookingForAJobDescription,
                           contacts
                         }: Profile): JSX.Element => {
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
          {Object.keys(contacts).map(key => (
            // @ts-ignore
            <li key={key}>{key}: {contacts[key]}</li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

const ProfileData = ({ profileData, updateUserData }: ProfileDataProps): JSX.Element => {
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

  const handleSubmit = (formData: any) => {
    updateUserData(formData).then(deactivateEditMode);
  };

  return (
    <div>
      <button onClick={handleClickOnEdit}>Edit</button>
      {editMode
       ? <ProfileDataReduxForm initialValues={profileData}
         // @ts-ignore
                               profileData={profileData}
                               onSubmit={handleSubmit}/>
       : <ProfileDataInfo {...profileData}/>}
    </div>
  );
};

export default ProfileData;
