
import './App.css';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import AddCart from './components/AddCart';
import ShowCart from './components/ShowCart';

function App() {
  return (
   <div className='App'>
    <Header/>
    <AddCart/>
    <ShowCart/>
   </div>
  );
}

export default App;
