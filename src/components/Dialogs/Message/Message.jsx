import React from 'react';
import classes from './Message.module.css';

const Message = ( { message, owner: { id, avatar } } ) => {

  return (
    <div className={ `${ classes.message } ${ id === 1 ? classes.message_own : undefined }` }>
      <img src={ avatar } alt="respondent's avatar"/>
      { message }
    </div>
  );
};

export default Message;
