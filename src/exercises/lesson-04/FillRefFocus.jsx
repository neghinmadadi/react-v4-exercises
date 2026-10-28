// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.

import { useRef } from 'react';

export default function FillRefFocus() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input ref={inputRef} type="text" placeholder="Type here..." />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

//explanation:
/**
 * The issue was that the focusInput() was empty, so clicking the button did nothing. To put the focus on the input field when the button is clicked, a ref object is first created with useRef(null) and passed to the input element's ref attribute. React then stores the input's DOM element in inputRef.current, and the handler calls inputRef.current.focus() when the button is clicked.
 */
