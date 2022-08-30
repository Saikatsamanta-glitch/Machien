import logo from './logo.svg';
import './App.css';

import Todolist from './Todolist';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  console.log(new Date().toLocaleDateString())
  return (
    <div >
     <Todolist/>
    </div>
  );
}

export default App;
