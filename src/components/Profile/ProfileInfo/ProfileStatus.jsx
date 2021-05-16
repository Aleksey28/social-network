import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  render() {
    return (
      <div>
        { !this.state.editMode
          ? <span>{ this.props.status }</span>
          : <input value={ this.props.status }/> }
      </div>
    );
  }
}

export default ProfileStatus;
