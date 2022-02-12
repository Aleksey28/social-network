import React, { useRef } from 'react';
import classes from './UploadButton.module.css';
import { Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

interface UploadButtonProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UploadButton: React.FC<UploadButtonProps> = ({ onChange, ...props }) => {
  const input = useRef<HTMLInputElement>(null);

  const handleClickButton = () => {
    input.current?.click();
  };

  return <div>
    <input ref={input} type="file" onChange={onChange} className={classes.input}/>
    <Button className={classes.button} onClick={handleClickButton}>
      <UploadOutlined/> Click to Upload
    </Button>
  </div>;
};

export default UploadButton;
