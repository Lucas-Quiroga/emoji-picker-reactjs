import React, { forwardRef, useState } from "react";

import { data as emojiList } from "./../emojiPicker/Data";
import EmojiButton from "./EmojiButton";
import EmojiSearch from "./EmojiSearch";

export function EmojiPicker(props, inputRef) {
  // estados
  const [isOpen, setIsOpen] = useState(false);
  const [emojis, setEmojis] = useState([...emojiList]);

  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    const q = e;

    if (!!q) {
      const search = emojiList.filter((emoji) => {
        return (
          emoji.name.toLowerCase().includes(q) ||
          emoji.keywords.toLowerCase().includes(q)
        );
      });

      setEmojis(search);
    } else {
      setEmojis(emojiList);
    }
  };

  // sub - componente;
  // const EmojiPickerContainer = () => {
  //   return (
  //     <div>
  //       <EmojiSearch onSearch={handleSearch} />
  //       <div>
  //         {emojis.map((emoji) => (
  //           <div key={emoji.symbol}>{emoji.symbol}</div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };}

  const handleClickEmoji = (emoji) => {
    const cursorPos = inputRef.current.selectionStart;
    const text = inputRef.current.value;
    const prev = text.slice(0, cursorPos);
    const next = text.slice(cursorPos);

    inputRef.current.value = prev + emoji.symbol + next;
    inputRef.current.selectionStart = cursorPos + emoji.symbol.length;
    inputRef.current.selectionEnd = cursorPos + emoji.symbol.length;
    inputRef.current.focus();
  };

  return (
    <div>
      <button onClick={handleClickOpen}>😀</button>

      {/* valido si está abierto */}
      {isOpen ? (
        <div>
          <EmojiSearch onSearch={handleSearch} />
          <div>
            {emojis.map((emoji) => (
              <EmojiButton
                key={emoji.symbol}
                emoji={emoji}
                onClick={handleClickEmoji}
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

//para pasar una refencia de "useRef" de un componente padre a un componente hijo es usando este componente especial, en donde definimos primero las props y segundo la refencia que queramos pasar o sino directamente le adjuntamos el componente que tiene esas referencias
export default forwardRef(EmojiPicker);
