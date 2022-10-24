import React from "react";

const EmojiButton = ({ emoji, onClick }) => {
  const handleClick = () => {
    onClick(emoji);
  };

  return <button onClick={handleClick}>{emoji.symbol}</button>;
};

export default EmojiButton;
