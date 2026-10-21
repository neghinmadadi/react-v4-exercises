//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
/**
 * The issue is that there is no dependency array for the useEffect function and setCount (as the state setter in useEffect) keeps setting the state (count) to a new value. This causes React to re-render the component after every increase in the state value, which leads to an infinite loop. Adding an empty dependency array solves this problem because when React looks at this array, it sees no variable changes and runs the effect only once right after mount.
 */
