
import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';
export const TaskLists = ({tasks,setTasks},props) => {

    const [show, setShow] = useState(true);
   

    function handleDelete(id) {
        console.log(id);
        setTasks(tasks.filter(task => task.id != id));
    }
    return (
        <section className='taskLists'>
        
            <h1 style={{color:'red'}}>Task Lists {props.title} {props.subTitle} {props.info}</h1>
            <ul>
                <button onClick={() => setShow(!show)}>Toggle</button>
                {show && tasks.map((task) => (
                    //   <li key={task.id} className={task.isCompleted?"completed":"inCompleted"}>
                    //     <span>{task.id} - {task.name}</span>
                    //     <button onClick={()=>handleDelete(task.id)}>Delete</button>
                    //   </li>
                    <TaskCard key={task.id} task={task} handleDelete={handleDelete} info={props.info}/>

                ))}

            </ul>
            {/* <div className="box success">
                <p className='title'>first title of first leasoon</p>
                <p className='description'>it describes the importance of environment protction</p>
            </div>

            <div className="box warning">
                <p className='title'>first title of first leasoon</p>
                <p className='description'>it describes the importance of environment protction</p>
            </div>
            <div className="box alert">
                <p className='title'>first title of first leasoon</p>
                <p className='description'>it describes the importance of environment protction</p>
            </div> */}
            <BoxCard result="success">
                <p className='title'>first title of first leasoon</p>
                <p className='description'>it describes the importance of environment protction</p>
            </BoxCard>
            <BoxCard result="warning">
                <p className='title'>first title of first leasoon</p>
                <p className='description'>it describes the importance of environment protction</p>
                <p>this is a amn example of overlal leacture his is a amn example of overlal 
                    leacture his is a amn example of overlal leacture his is a amn example of overlal leacture</p>
            </BoxCard>
            <BoxCard result="alert">
                <p className='title'>first title of first leasoon</p>
                <p className='description'>it describes the importance of environment protction</p>
            </BoxCard>
        </section>
    )


}
// import { useState } from "react"


// export const TaskLists = (props) => {
//     const [tasks, setTasks] = useState([{ id: 123, name: 'LeasonOne', ststus: 'completed' }, { id: 124, name: 'LeasonTwo', ststus: 'notCompleted' }, { id: 126, name: 'LeasonThree', ststus: 'completed' }])
//     const [show, setshow] = useState(true);
//     function handleDelete(id) {
//         setTasks(tasks.filter((task) => task.id != id))
//     }

//     return (
//         <>
//         <h1>Task List Welcome {props.title}</h1>
//             <ul>
//                 <button onClick={()=>setshow(!show)}>Toggle</button>
//                 {show && tasks.map((task) => (
//                     <li key={task.id}>
//                         <span>{task.id} {task.name} {task.ststus}</span>
//                         <button onClick={() => handleDelete(task.id)}>Delete</button>
//                     </li>
//                 )

//                 )}
//             </ul>
//         </>
//     )


// }