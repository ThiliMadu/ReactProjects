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
//           Learn React123
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import './App.css';
import { Header } from './components/Header'
import { TaskLists } from './components/TaskLists';
import { Footer } from './components/Footer';
import { AddTask } from './components/AddTask';
import { useState } from 'react';
const info = 'Random';

function App() {
  const [tasks, setTasks] = useState([{ id: 1, isCompleted: true, name: 'first leasson' },
  { id: 2, isCompleted: false, name: 'first leasson' }, { id: 3, isCompleted: true, name: 'first leasson' }]);

  // const [tasks, setTasks] = useState([]);

  return (
    <div className='App'>
      <Header />
      <h1>Welcome</h1>
      <main>
        {/* <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskLists tasks={tasks} setTasks={setTasks} title="Random" subTitle='Test' info={info} /> */}
        <AddTask tasks={tasks} setTasks={setTasks}/>
        <TaskLists tasks={tasks} setTasks={setTasks} title="Random" subTitle='Test' info={info} />
      </main>
      <Footer />
    </div>
  )

}
export default App;
