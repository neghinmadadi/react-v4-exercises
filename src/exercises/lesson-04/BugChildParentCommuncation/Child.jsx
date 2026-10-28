export default function Child({ onIncrement }) {
  return <button onClick={onIncrement}>Increment Counter</button>;
}

// explanation
/**
 * The issue was that the increment() function (which runs the setCount()) wasn't passed down to the Child in the Parent component, so the click handler in the button element in Child did nothing. To solve this issue, onIncrement prop is added to the Child component and the Parent passes down the increment() to the Child for this prop. Now, when the Increment Counter button is clicked, increment() runs and calls setCount() and count (counter) value is increased by one. This change in the state value makes React rerender Parent, which shows the new count.
 */
