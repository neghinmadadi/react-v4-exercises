function TaskFilterButtons({ options, currentFilter, onFilterChange }) {
  return (
    <>
      {options.map((option) => (
        <button
          key={option.filterValue}
          onClick={() => onFilterChange(option.filterValue)}
        >
          {option.label}
        </button>
      ))}

      <p>Current filter: {currentFilter}</p>
    </>
  );
}

export default TaskFilterButtons;
