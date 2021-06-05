import React from 'react';
import classes from './Dialogs.module.css';
import Respondent from './Respondent/Respondent';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLength30, required } from '../../utils/validators';

const DialogsForm = ( { handleSubmit } ) => {
  return (
    <form onSubmit={ handleSubmit }>
      <Field name="newMessage"
             placeholder="Write your message"
             component={ Textarea }
             validate={ [required, maxLength30] }/>
      <button type="submit">Send</button>
    </form>
  );
};

const DialogsReduxForm = reduxForm( {
  form: 'newMessage',
} )( DialogsForm );

const Dialogs = ( { dialogsPage, friends, sendMessage } ) => {

  const messagesElements = dialogsPage.messagesData.map( ( item ) => {
    let owner;
    if ( item.ownerId === 1 ) {
      owner = {
        id: 1,
        avatar: 'https://sun3-12.userapi.com/impf/c850220/v850220643/1cf89f/09Ze66DlRZ8.jpg?size=200x0&quality=96&crop=0,0,1440,2160&sign=f5a0c1a46079ef18be3b6f634672bd5d&ava=1',
      };
    } else {
      owner = friends.find( friend => friend.id === item.ownerId );
    }
    return (
      <li key={ item.id }>
        <Message message={ item.message } owner={ owner }/>
      </li>
    );
  } );

  const dialogsElements = dialogsPage.dialogsData.map( ( item ) => {
    const owner = friends.find( friend => friend.id === item.ownerId );
    return (
      <li key={ item.id }>
        <Respondent name={ item.name } id={ item.id } owner={ owner }/>
      </li>
    );
  } );

  const handleSendMessage = ( formData ) => {
    sendMessage( formData );
  };

  return (
    <section className={ classes.dialogs }>
      <ul className={ classes.respondents }>
        { dialogsElements }
      </ul>
      <ul className={ classes.messages }>
        { messagesElements }
      </ul>
      <div className={ classes.newMessage }>
        <DialogsReduxForm onSubmit={ handleSendMessage }/>
      </div>
    </section>
  );
};

export default Dialogs;
