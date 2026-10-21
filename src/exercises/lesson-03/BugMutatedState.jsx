// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';
export default function BugMutatedState() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount((previous) => previous + 1);
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// (Write your explanation here)
/** The problem is that the count is getting directly mutated by count++. In React, state must be treated as immutable since React relies on comparing the old state value to the new state value to decide whether to update the screen. To fix this, a functional update is used in setCount: previous => previous+1. This way, the new state value is calculated without directly altering the original state variable.*/
