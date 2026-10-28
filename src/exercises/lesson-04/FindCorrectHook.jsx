// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useState } from 'react';

export default function FindCorrectHook() {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount((previous) => previous + 1);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount} Clicks</button>
    </div>
  );
}

// explanation
/**
 * useState is the correct hook to be used here because we want to display the number of times the button is clicked so the component has to be re-rendered for this to happen. The setClickCount() updates the state clickCount and triggers React to re-render the component. But, if useRef was used, changing its value like ref.current++ wouldn't trigger a re-render. The updates in the clickCount value cannot be displayed without re-rendering.
 */
