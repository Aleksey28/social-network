import { InjectedFormProps, reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../../common/FormsControls/FormsControls';
import { required } from '../../../../utils/validators';
import React, { useEffect, useState } from 'react';
import classes from './ProfileData.module.css';
import { ContactsType, ProfileType } from '../../../../types';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData } from '../../../../redux/profile/reducer';
import { getIsValid } from '../../../../redux/profile/selector';

interface Props {
  profileData: Partial<ProfileType>;
  isOwner: boolean;
}

type FormType = React.FC<InjectedFormProps<ProfileType>>;
type FormNames = Extract<keyof ProfileType, string>;
type ContactNames = Extract<keyof ContactsType, string>;
type FullContactNames = `contacts.${ContactNames}`;

const ProfileDataForm: FormType = ({ handleSubmit, error, initialValues }) => {
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      Name: {createField<FormNames>('fullName', Input, [required], 'Full name')}
      About me: {createField<FormNames>('aboutMe', Textarea, [required], 'About me')}
      Looking for a job: {createField<FormNames>('lookingForAJob', Input, [], 'Looking for a job', 'checkbox')}
      Skills: {createField<FormNames>('lookingForAJobDescription', Input, [required], 'Skills')}
      Contacts:
      <ul>
        {!!initialValues.contacts && (Object.keys(initialValues.contacts) as Array<ContactNames>).map(key => (
          <li key={key}>
            {key}: {createField<FullContactNames>(`contacts.${key}`, Input, [], key)}
          </li>
        ))}
      </ul>

      {error && <span className={classes.form__error}>{error}</span>}

      <button type="submit">Save</button>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm<ProfileType>({
  form: 'profileData',
})(ProfileDataForm);

const ProfileDataInfo: React.FC<Partial<ProfileType>> = ({
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
          {!!contacts && Object.entries(contacts).reduce((res: JSX.Element[], [key, value]) => {
            if (value)
              res.push(<li key={key}>{key}: {value}</li>)

            return res;
          }, [])}
        </ul>
      </li>
    </ul>
  );
};

const ProfileData: React.FC<Props> = ({ profileData, isOwner }) => {
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
