import React from 'react'
import { useState } from 'react'



const AddTask = () => {
    const [text, setText] = useState()
    const [day, setDay] = useState()
    const [reminder, setReminder] = useState(false)
  return (
    <form className='add-form'>

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
        <input type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} /> 
        </div>

         <input type="submit"  value='save task' className='btn btn-block'/>  

    </form>
  )
}

export default AddTask