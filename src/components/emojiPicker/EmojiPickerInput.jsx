import React, { useRef } from "react";
import EmojiPicker from "./EmojiPicker";

const EmojiPickerInput = () => {
  //creamos la refencia del input al cual podriamos llamar a través de una funcion
  const refInput = useRef(null);

  return (
    <div>
      <input ref={refInput} />
      <EmojiPicker ref={refInput} />
    </div>
  );
};

export default EmojiPickerInput;

// ejemplo de useRef con el boton
//  //creamos la funcion del boton
//  function handleClick() {
//     //mandamos a llamar al elemento focus que tiene los inputs, hace referencia a current que hace que salga la referencia del mismo
//     refInput.current.focus();
//   }
//   <button onClick={handleClick}>da click</button>
