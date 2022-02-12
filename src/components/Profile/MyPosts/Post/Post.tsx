import React, { createElement, useState } from 'react';
import { Avatar, Comment, Image, Tooltip } from 'antd';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { getUserInfoState } from '../../../../redux/profile/selector';

interface PropsType {
  message: string;
}

type ActionTypes = null | 'liked' | 'disliked';

const Post: React.FC<PropsType> = ({ message }) => {
  const profileInfo = useSelector(getUserInfoState);

  const [likes, setLikes]       = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction]     = useState<ActionTypes>(null);

  const handleLike = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const handleDislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const actions = [
    <Tooltip key="post-like" title="Like">
      <span onClick={handleLike}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="post-dislike" title="Dislike">
      <span onClick={handleDislike}>
        {createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];


  return (
    <Comment
      actions={actions}
      author={profileInfo.fullName}
      avatar={<Avatar size="large" src={<Image src={profileInfo.photos?.small} preview={false}
                                               style={{ width: '100%', height: '100%' }}/>}/>}
      content={
        <p>
          {message}
        </p>
      }
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
  );
};

export default Post;
