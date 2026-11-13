import { useState } from 'react';

import UserProfile from './components/UserProfile.jsx';
import TaskFilterButtons from './components/TaskFilterButtons.jsx';
import TaskItem from './components/TaskItem.jsx';
import { filterTasks } from './utils/filterTasks.js';
import { useFetchTasks } from './hooks/useFetchTasks.js';

const filterObjects = [
  {
    filterValue: 'all',
    label: 'All',
  },
  {
    filterValue: 'completed',
    label: 'Completed',
  },
  {
    filterValue: 'pending',
    label: 'Pending',
  },
];

export default function StudentWork() {
  const [filter, setFilter] = useState('all');

  const { loading, tasks } = useFetchTasks();

  const visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <UserProfile name="Student" />

      <div>
        <TaskFilterButtons
          options={filterObjects}
          currentFilter={filter}
          onFilterChange={setFilter}
        />
      </div>

      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
