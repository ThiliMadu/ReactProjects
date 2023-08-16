

export const TaskCard = ({task,handleDelete,info}) => {
    return (
        <li key={task.id} className={task.isCompleted ? "completed" : "inCompleted"}>
            <span>{task.id} - {task.name} -{info}</span>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
    )
}
