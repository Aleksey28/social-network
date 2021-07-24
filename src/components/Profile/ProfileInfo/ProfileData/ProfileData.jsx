import Contacts from './Contacts';

const ProfileData = ( { fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts } ) => {
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

export default ProfileData;
