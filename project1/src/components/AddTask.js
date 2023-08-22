

export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if(task.id){
      console.log('kkk',task.id);
      const date = new Date();
      const updatedTask = taskList.map((toDo) => (
        toDo.id === task.id? {id:task.id,name:task.name,time:`${date.toLocaleTimeString()}${date.toLocaleDateString()}`}:
        toDo
      ));
      console.log(updatedTask,'update task');
      setTaskList(updatedTask);
      setTask({});
      // console.log(taskList,'after update task');
     // setTaskList([...taskList, updatedTask]);
    }
    else{
      const date = new Date();
      const newTask = {
        id: date.getTime(), 
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()}${date.toLocaleDateString()}`
      }
      setTaskList([...taskList, newTask]);
      setTask({});
      // e.target.task.value = "";
    }
  }
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" value={task.name || ""} autoComplete="off" placeholder="add task" maxLength='25' onChange={e=>setTask({...task,name:e.target.value})}></input>
        <button type='submit'>{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  )
}
//  onChange={e=>setTask({...task,name:e.target.value})}