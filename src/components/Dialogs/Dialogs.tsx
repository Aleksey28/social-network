import React from 'react';
import classes from './Dialogs.module.css';
import Respondent from './Respondent/Respondent';
import Message from './Message/Message';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { createField, Textarea } from '../common/FormsControls/FormsControls';
import { maxLength30, required } from '../../utils/validators';
import { InitialState as DialogsState, Action } from '../../redux/dialogs/reducer';
import { InitialState as FriendsState } from '../../redux/friends/reducer';

interface Props {
  dialogsPage: DialogsState;
  friends: FriendsState;
  sendMessage: (newMessage: string) => Action;
}

interface DialogsFormProps {
  newMessage: string;
}

type DialogsFormType = React.FC<InjectedFormProps<DialogsFormProps>>
type DialogsFormDataNames = Extract<keyof DialogsFormProps, string>

const DialogsForm: DialogsFormType = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField<DialogsFormDataNames>('newMessage', Textarea, [required, maxLength30], 'Write your message')}
      <button type="submit">Send</button>
    </form>
  );
};

const DialogsReduxForm = reduxForm<DialogsFormProps>({
  form: 'newMessage',
})(DialogsForm);

const Dialogs: React.FC<Props> = ({ dialogsPage: { messagesData, dialogsData }, friends, sendMessage }) => {

  const messagesElements = messagesData.map(({ ownerId, id, message }) => {
    let owner;
    if (ownerId === 1) {
      owner = {
        id:     1,
        avatar: 'https://sun3-12.userapi.com/impf/c850220/v850220643/1cf89f/09Ze66DlRZ8.jpg?size=200x0&quality=96&crop=0,0,1440,2160&sign=f5a0c1a46079ef18be3b6f634672bd5d&ava=1',
      };
    }
    else {
      owner = friends.find(({ id: friendId }) => friendId === ownerId);
    }
    return (
      <li key={id}>
        <Message message={message} owner={owner}/>
      </li>
    );
  });

  const dialogsElements = dialogsData.map(({ id, ownerId }) => {
    const owner = friends.find(({ id: friendId }) => friendId === ownerId);
    return (
      <li key={id}>
        <Respondent id={id} owner={owner}/>
      </li>
    );
  });

  const handleSendMessage = (formData: DialogsFormProps) => {
    const { newMessage } = formData;
    sendMessage(newMessage);
  };

  return (
    <section className={classes.dialogs}>
      <ul className={classes.respondents}>
        {dialogsElements}
      </ul>
      <ul className={classes.messages}>
        {messagesElements}
      </ul>
      <div className={classes.newMessage}>
        <DialogsReduxForm onSubmit={handleSendMessage}/>
      </div>
    </section>
  );
};

export default Dialogs;
