import { useRef, useState } from 'react';
import './AddTask.css'

export const AddTask = ({tasks,setTasks}) => {

  const [taskValue, settaskValue] = useState('');
  // const taskRef = useRef();
  const [progressValue, setProgressValue] = useState(false);


  const handleChnage = (event) => {
    console.log(event.target.value);
    settaskValue(event.target.value);
  }

  const handleReset = () => {
    settaskValue('');
    setProgressValue(false)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(typeof(Boolean(progressValue)));
    const task = {
      id: Math.floor(Math.random() * 1000),
      name: taskValue,
      isCompleted: Boolean(progressValue)
    }
    // console.log(task);
    handleReset();
    setTasks([...tasks,task]);
  }
  return (
    <section className="addtask">

      <form onSubmit={handleSubmit}>
        {/* <label htmlFor='task'>Task Name:</label>  */}
        <input onChange={handleChnage} type='text' name='task' id='task' placeholder='Add Task' autoComplete='off'
          value={taskValue}></input>
        <select onChange={(event) => setProgressValue(event.target.value)} >
          <option value={false}>Pending</option>
          <option value={true}>Completed</option>
        </select>

        <span onClick={handleReset} className='reset'>ReSet</span>
        <button type="submit">Submit</button>
      </form>
      <p>{taskValue}</p>
    </section>
  )
}
