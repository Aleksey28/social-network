import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode() {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode() {
    this.setState({
      editMode: true
    })
  }

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
