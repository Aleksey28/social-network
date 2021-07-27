import Contacts from './Contacts';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../../common/FormsControls/FormsControls';
import { required } from '../../../../utils/validators';
import React, { useState } from 'react';
import classes from './ProfileData.module.css';

const ProfileDataForm = ( { handleSubmit, error, profileData } ) => {
  return (
    <form onSubmit={ handleSubmit } className={ classes.form }>
      <Field name="fullName"
             placeholder="Full name"
             component={ Input }
             validate={ [required] }/>
      <Field name="aboutMe"
             placeholder="About me"
             component={ Textarea }
             validate={ [required] }/>
      <Field name="lookingForAJob"
             placeholder="Looking for a job"
             component={ Input }
             validate={ [required] }/>
      <Field name="lookingForAJobDescription"
             placeholder="Skills"
             component={ Input }
             validate={ [required] }/>
      <ul>
        Contacts:
        { Object.keys( profileData.contacts ).map( key => (
          <Field key={ key }
                 name={ `contacts.${ key }` }
                 placeholder={ key }
                 component={ Input }
                 validate={ [required] }/>
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
        Looking for a job:{ lookingForAJob }
      </li>
      <li>
        Skills: { lookingForAJobDescription }
      </li>
      <li>
        Contacts:
        <Contacts contacts={ contacts }/>
      </li>
    </ul>
  );
};

const ProfileData = ( profileData ) => {
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

  return (
    <div>
      <button onClick={ handleClickOnEdit }>Edit</button>
      { editMode
        ? <ProfileDataReduxForm profileData={ profileData } handleSubmit={ deactivateEditMode }/>
        : <ProfileDataInfo { ...profileData }/> }
    </div>
  );
};

export default ProfileData;
