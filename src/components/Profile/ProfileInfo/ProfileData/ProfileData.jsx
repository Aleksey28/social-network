import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../../common/FormsControls/FormsControls';
import { required } from '../../../../utils/validators';
import React, { useState } from 'react';
import classes from './ProfileData.module.css';

const ProfileDataForm = ( { handleSubmit, error, profileData } ) => {
  return (
    <form onSubmit={ handleSubmit } className={ classes.form }>
      Name: <Field name="fullName"
                   placeholder="Full name"
                   component={ Input }
                   validate={ [required] }/>
      About me: <Field name="aboutMe"
                       placeholder="About me"
                       component={ Textarea }
                       validate={ [required] }/>
      Looking for a job: <Field name="lookingForAJob"
                                placeholder="Looking for a job"
                                component={ Input }
                                validate={ [required] }/>
      Skills: <Field name="lookingForAJobDescription"
                     placeholder="Skills"
                     component={ Input }
                     validate={ [required] }/>
      Contacts:
      <ul>
        { Object.keys( profileData.contacts ).map( key => (
          <li key={ key }>
            { key }: <Field name={ `contacts.${ key }` }
                            placeholder={ key }
                            component={ Input }
                            validate={ [required] }/>
          </li>
        ) ) }
      </ul>

      { error && <span className={ classes.form__error }>{ error }</span> }

      <button type="submit">Save</button>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm( {
  form: 'profileData',
} )( ProfileDataForm );

const ProfileDataInfo = ( { fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts } ) => {
  return (
    <ul>
      <li>
        Name: { fullName }
      </li>
      <li>
        About me: { aboutMe }
      </li>
      <li>
        Looking for a job: { lookingForAJob }
      </li>
      <li>
        Skills: { lookingForAJobDescription }
      </li>
      <li>
        Contacts:
        <ul>
          { Object.keys( contacts ).map( key => (
            <li key={ key }>{ key }: { contacts[key] }</li>
          ) ) }
        </ul>
      </li>
    </ul>
  );
};

const ProfileData = ( { profileData, updateUserData } ) => {
  const [editMode, setEditMode] = useState( false );

  const activateEditMode = () => {
    setEditMode( true );
  };

  const deactivateEditMode = () => {
    setEditMode( false );
  };

  const handleClickOnEdit = () => {
    if ( editMode )
      deactivateEditMode();
    else
      activateEditMode();
  };

  const handleSubmit = async ( formData ) => {
    try {
      await updateUserData( formData );
      deactivateEditMode();
    } catch (error) {
      console.log( error );
    }
  };

  return (
    <div>
      <button onClick={ handleClickOnEdit }>Edit</button>
      { editMode
        ? <ProfileDataReduxForm initialValues={ profileData }
                                profileData={ profileData }
                                onSubmit={ handleSubmit }/>
        : <ProfileDataInfo { ...profileData }/> }
    </div>
  );
};

export default ProfileData;
