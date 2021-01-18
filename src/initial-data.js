const initialData = {
  tasks: {
    'task-1': {id: 'task-1', content: 'Carottes'}, 
    'task-2': {id: 'task-2', content: 'Patates'}, 
    'task-3': {id: 'task-3', content: 'Courgettes'}, 
    'task-4': {id: 'task-4', content: 'Bananes'}, 
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Courses',
      tasksIds: ['task-1', 'task-2', 'task-3', 'task-4']
    },
    'column-2': {
      id: 'column-2',
      title: 'in progress',
      tasksIds: []
    },
  },
  columnOrder: ['column-1', 'column-2']
};

export default initialData;