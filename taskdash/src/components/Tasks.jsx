import React from 'react'
import { useState } from 'react'




const Tasks = () => {

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

  return (
    <div>
        {tasks.map((task) => (
        
        <h3 key={task.id}>{task.text}</h3>))}

    </div>
  )
}

export default Tasks