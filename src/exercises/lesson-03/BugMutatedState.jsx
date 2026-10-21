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
/** The problem is that the count (component's state) is getting directly mutated by count++. In React, state must be treated as immutable since React relies on comparing the old state value to the new state value to decide whether to update the page. To fix this, first, the let in the count variable definition is replaced by const so JS throws a TypeError if count is reassigned. Second, a functional update is used in setCount: previous => previous+1. This way, the new state value is calculated without directly altering the original state variable. */
