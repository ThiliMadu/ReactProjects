// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React soon1
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import './App.css';
import {useState} from 'react';

function App() {
  const [count ,setCount] = useState(0);
  const [show ,setShow] = useState(true);
  const [tasks ,setTasks] = useState([{id:1,isCompleted:true,name:'first leasson'},
  {id:2,isCompleted:false,name:'first leasson'},{id:3,isCompleted:true,name:'first leasson'}]);

  const userName = 'thilini';
  function handleAdd() {
    setCount(count=>count+1);
    setCount(count=>count+1);
    setCount(count=>count+1);
  }
  function handleSub() {
    setCount(count-1);
  }
  function handleReSet() {
    setCount(0);
  }
  function handleDelete(id)
  {
    console.log(id);
    setTasks(tasks.filter(task=>task.id!=id));
  }

  return (
    <div className="App">
      <div className='box'>
        <p>{count}</p>
        <button onClick={handleAdd} className="add">ADD</button>
        {/* <button onClick={()=>setCount(count+1)} className="add">ADD</button> */}
        <button onClick={handleSub}className="sub">SUBSTRACT</button>
        <button onClick={handleReSet}className="reSet">RESET</button>
      </div>
      <div>
        <h1>Task Lists</h1>
        <ul>
          <button onClick={()=>setShow(!show)}>Toggle</button>
          {show && tasks.map((task,index)=>(
            <li key={task.id} className={task.isCompleted?"completed":"inCompleted"}>
              <span>{task.id} - {task.name}</span>
              <button onClick={()=>handleDelete(task.id)}>Delete</button>
            </li>

          ))}
          {/* {tasks.map((task,index)=>(
            <li key={task.id}>
              <span>{task.id} - {task.name}</span>
              <button onClick={()=>handleDelete(task.id)}>Delete</button>
            </li>

          ))} */}
        </ul>
      </div>
    </div>
    // <div>
    //   <Header/>
    // <h1>welcome to the first leasson {userName}</h1>
    // <p>note</p>
    // <Footer/>
    // </div>
  )

}
export default App;