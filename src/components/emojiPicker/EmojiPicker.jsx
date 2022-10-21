import React, { forwardRef, useState } from "react";

import { data as emojiList } from "./../emojiPicker/Data";

export function EmojiPicker(props, inputRef) {
  const [isOpen, setIsOpen] = useState(false);
  const [emojis, setEmojis] = useState(emojiList);

  // sub-componente
  const EmojiPickerContainer = () => {
    return (
      <div>
        <input />
        <div>{}</div>
      </div>
    );
  };

  return (
    <div>
      <button>😀</button>

      {/* valido si está abierto */}
      {isOpen ? <EmojiPickerContainer /> : ""}
    </div>
  );
}

//para pasar una refencia de "useRef" de un componente padre a un componente hijo es usando este componente especial, en donde definimos primero las props y segundo la refencia que queramos pasar o sino directamente le adjuntamos el componente que tiene esas referencias
export default forwardRef(EmojiPicker);
