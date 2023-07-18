
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';



function App() {
  const [showAddTasks, setShowAddTasks] = useState(false)

  const [tasks, setTasks] = useState(
    [
        {
          id: 1,
          text: 'apointment',
          day: '20th June at 1:30pm',
          reminder: true,
        },
        {
          id: 2,
          text: 'apointment',
          day: '6th Dec at 1:30pm',
          reminder: true,
        },
        {
          id: 3,
          text: 'apointment',
          day: '3rd Sept at 1:30pm',
          reminder: true,
        }
      ]
      
)

const addTask = (task) => {
 const id = Math.floor(Math.random() * 10000) + 1 
 const newTask = { id, ...task }
 setTasks([...tasks, newTask])
}

const deletTask = (id) => {
  console.log('delete', id);
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleRemider = (id) => {
  console.log(id); 
  setTasks(tasks.map((task) => 
  task.id === id ? {...task, reminder: !task.reminder} : task
 ))

}


  return (
    <div className="container">
<Header title="Task dash" onAdd={() => setShowAddTasks(!showAddTasks)} showAdd={showAddTasks}/>
     {showAddTasks && <AddTask onAdd={addTask}/>}
        {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deletTask} onToggle={toggleRemider} />  
        ) : (
        'Task dash has no task to display') }
    </div>
  );
}

export default App;
