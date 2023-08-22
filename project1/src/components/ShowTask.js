export const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  // const tasks = [{ id: 1001, name: 'TaskA', time: '10:22:AM' }, { id: 1002, name: 'TaskA', time: '10:22:AM' }, { id: 1003, name: 'TaskA', time: '10:22:AM' }]
  const handleEdit = (id) => {
    console.log(id,'mmm');
    const selectedTask = taskList.find(toDo => toDo.id == id);
    console.log(selectedTask);
    setTask(selectedTask);
  }
  const handleDelete = (id) => {
    const constUpdatedTaskLists = taskList.filter(toDo => toDo.id !== id);
    setTaskList(constUpdatedTaskLists);
  }
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">ToDO</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTaskList([])}>CLear All</button>
      </div>
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <p>
              <span className="task">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i onClick={() => handleEdit(task.id)} className="bi bi-pencil-square"></i>
            <i onClick={() => handleDelete(task.id)} className="bi bi-trash"></i>
          </li>
        ))}

      </ul>
    </section>
  )
}
