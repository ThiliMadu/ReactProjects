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
const info = 'Random';
function App() {
  return (
    <div className='App'>
      <Header />
      <h1>Welcome</h1>
      <TaskLists title="Random" subTitle='Test' info={info} />
      <Footer />
    </div>
  )

}
export default App;
