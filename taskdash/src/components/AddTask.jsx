import React from 'react'
import { useState } from 'react'



const AddTask = ({ onAdd }) => {
    const [text, setText] = useState()
    const [day, setDay] = useState()
    const [reminder, setReminder] = useState(false)

    const onsubmit = (e) => {
      e.preventDefault()

      if(!text) {
        alert('Add a task')
        return
      }

      onAdd({text, day, reminder})

      setText('')
      setDay('')
      setReminder(false)
    }

  return (
    <form className='add-form' onSubmit={onsubmit}>

        <div className='form-control'>
            <label htmlFor="text">Task</label>
        <input type="text" placeholder='Add your task' value={text} onChange={(e) => setText(e.target.value)} /> 
        </div>

        <div className='form-control '>
        <label htmlFor="text">Day and Time</label>
        <input type="text" placeholder='Add your task' value={day} onChange={(e) => setDay(e.target.value)}/> 
        </div>

        <div className='form-control form-control-check'>
        <label htmlFor="text">Set Reminder</label>
        <input type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} checked={reminder} /> 
        </div>

         <input type="submit"  value='save task' className='btn btn-block'/>  

    </form>
  )
}

export default AddTask