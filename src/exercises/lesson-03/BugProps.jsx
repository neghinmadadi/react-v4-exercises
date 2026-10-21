// src/exercises/lesson-03/BugProps.jsx

import { useState } from 'react';

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this lesson's components.
*/

export default function BugProps({ name = 'friend' }) {
  const [message, setMessage] = useState(`Hello, ${name}`);

  function handleChange() {
    setMessage(`Hi, ${name}!`);
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </div>
  );
}

// Explanation:
// (Write your explanation here)
/** The issue is that the message is defined as a local variable and React can't track changes to its value. To fix this, message and setMessage are defined as the component's state and state setter respectively. Then, setMessage is called in the handleChange function to replace the previous state value with the new value. This call makes React re-render the component, so when the user clicks the Change Greeting button, the page updates. Note, in this approach, the message is copied from name only once, so it won't update if the parent passes a new name. */
