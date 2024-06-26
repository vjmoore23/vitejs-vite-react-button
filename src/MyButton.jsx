import React from 'react';

const MyButton = ({ children, style, onClick }) => {
  return (
    <button style={style} onClick={onClick}>{children}</button>
  );
};

export default MyButton;