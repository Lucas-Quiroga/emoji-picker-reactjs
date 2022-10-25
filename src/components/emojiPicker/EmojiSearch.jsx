import React, { useState } from "react";
import styles from "./emojiPicker.module.scss";

const EmojiSearch = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    onSearch(e);
  };
  return (
    <input
      className={styles.search}
      type="text"
      onChange={handleChange}
      value={value}
    />
  );
};

export default EmojiSearch;
