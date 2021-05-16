import React from 'react';

class ProfileStatus extends React.Component {

  constructor( props ) {
    super( props );
    this.activateEditMode = this.activateEditMode.bind( this );
    this.deactivateEditMode = this.deactivateEditMode.bind( this );
    this.state = {
      editMode: false,
    };
  }

  activateEditMode() {
    this.setState( {
      editMode: true,
    } );
  }

  deactivateEditMode() {
    this.setState( {
      editMode: false,
    } );
  }

  render() {
    return (
      <div>
        { !this.state.editMode
          ? <span onClick={ this.activateEditMode }>{ this.props.status }</span>
          : <input value={ this.props.status } onBlur={ this.deactivateEditMode } autoFocus={ true }/> }
      </div>
    );
  }
}

export default ProfileStatus;
