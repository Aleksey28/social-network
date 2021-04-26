import React from "react";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = ({ userInfo }) => {
  console.log(userInfo);
  return (
    userInfo
    ? <div>
      <img
        src="https://cdn.pixabay.com/photo/2020/12/19/03/27/person-5843476_960_720.jpg"
        alt="машина"/>
      <div>
        ava+description
      </div>
    </div>
    : <Preloader/>
  );
};

export default ProfileInfo;
