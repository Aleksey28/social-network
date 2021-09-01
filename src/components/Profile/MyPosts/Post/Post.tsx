import React from 'react';
import classes from './Post.module.css';

interface Props {
  message: string
}

const Post: React.FC<Props> = ({ message }) => {
  return (
    <div className={classes.item}>
      <img
        src="https://sun9-32.userapi.com/impf/c850220/v850220643/1cf89f/09Ze66DlRZ8.jpg?size=1440x2160&quality=96&proxy=1&sign=8cd83def1f42c508f1c64c607f5504fd&type=album"
        alt="avatar"/>
      {message}
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
