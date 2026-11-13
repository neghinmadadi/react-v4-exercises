export function filterTasks(taskList, filterValue) {
  if (filterValue === 'completed') {
    return taskList.filter((task) => task.completed);
  }
  if (filterValue === 'pending') {
    return taskList.filter((task) => !task.completed);
  }

  return taskList;
}
