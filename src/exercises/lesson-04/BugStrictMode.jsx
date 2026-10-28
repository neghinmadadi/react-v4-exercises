// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug
/**
 * The problem was that the timer incremented by 2 every second. In development, React's StrictMode runs useEffect twice on the initial mount and simulates a remount cycle to reveal bugs caused by a missing or incorrect cleanup function. Here, there was no effect's cleanup for React to use after unmounting the component. As a result, the first interval was never stopped and the second one started on top of it, which caused the timer to go up by 2. To fix this, the intervalId variable is defined to store the unique ID returned by setInterval() for that particular interval. This ID is given to the clearInterval function to stop the associated interval after the component is removed from the DOM. Now, when StrictMode simulates a remount cycle stress test, the intervalId from the first mount is given to clearInterval for it to stop that interval before the actual mount.
 */
