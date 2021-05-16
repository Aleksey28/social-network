import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  render() {
    return (
      <div>
        <span>{ this.props.status }</span>
        <input>{ this.props.status }</input>
      </div>
    );
  }
}

export default ProfileStatus;
