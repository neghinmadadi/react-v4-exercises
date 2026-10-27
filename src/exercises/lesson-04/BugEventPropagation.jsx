// TOPIC: Event Bubbling & Stopping Propagation
// TASK: Ensure only the inner button's action triggers an alert when the button is pushed

export default function BugEventPropagation() {
  function handleOuterClick() {
    alert("RED BOX CLICKED ❌ Don't show me!");
  }

  function handleInnerClick(event) {
    event.stopPropagation();
    alert('Button Clicked ✅');
  }

  return (
    <>
      <h2>Stopping Event Propagation</h2>
      <div
        style={{ padding: 20, border: '2px solid red' }}
        onClick={handleOuterClick}
      >
        <button onClick={handleInnerClick}>Click inner button</button>
      </div>
    </>
  );
}

// explanation
/**
 * The bug here was that button's event (click) also reached the parent's event handler causing event bubbling. When the "Click inner button" was clicked, its onClick ran first and triggered the associated alert, followed by the parent element's onClick triggering the alert associated with the parent. To fix this, the event's stopPropagation() method is called in the inner button's event handler, handleInnerClick(), which stops the event from reaching the parent component. Now, only the inner button's alert is displayed when the button is pushed.
 */
