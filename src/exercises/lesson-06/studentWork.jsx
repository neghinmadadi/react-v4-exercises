import { useEffect, useState } from 'react';

import UserProfile from './components/UserProfile.jsx';
import TaskFilterButtons from './components/TaskFilterButtons.jsx';
import TaskItem from './components/TaskItem.jsx';
import { filterTasks } from './utils/filterTasks.js';

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
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  //  #1: Data fetching + state + UI logic all mixed together
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTasks([
        { id: 1, title: 'Learn React', completed: true },
        { id: 2, title: 'Refactor code', completed: false },
        { id: 3, title: 'Organize files', completed: false },
      ]);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  // #2: Filtering logic inside component
  const visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <UserProfile name={'Student'} />

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
