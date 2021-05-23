import React from 'react';

class ProfileStatus extends React.Component {

  constructor( props ) {
    super( props );
    this.activateEditMode = this.activateEditMode.bind( this );
    this.deactivateEditMode = this.deactivateEditMode.bind( this );
    this.handleChangeStatus = this.handleChangeStatus.bind( this );
    this.state = {
      editMode: false,
      status: this.props.status,
    };
  }

  componentDidUpdate( prevProps, prevState, snapshot ) {
    if ( this.props.status !== prevProps.status )
      this.setState( { status: this.props.status } );
  }

  activateEditMode() {
    this.setState( {
      editMode: true,
    } );
  }

  deactivateEditMode() {
    this.setState( {
      editMode: false,
    }, () => {
      this.props.updateUserStatus( this.state.status );
    } );

  }

  handleChangeStatus( e ) {
    this.setState( {
      status: e.currentTarget.value,
    } );
  }

  render() {
    return (
      <div>
        { !this.state.editMode
          ? <span onClick={ this.activateEditMode }>{ this.state.status || '---' }</span>
          : <input value={ this.state.status }
                   onBlur={ this.deactivateEditMode }
                   onChange={ this.handleChangeStatus }
                   autoFocus={ true }/> }
      </div>
    );
  }
}

export default ProfileStatus;
