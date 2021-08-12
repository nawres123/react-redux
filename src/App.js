
import './App.css';
import ListTask from './components/ListTask';
import AddTask from './components/AddTask';
function App() {
  return (
    <div >
      
      <h1 style={{color:'royalblue',textAlign:'center'}}>To Do List</h1>
      <AddTask/>
      <ListTask className="container vert-offset-top-2"/>
    </div>
  );
}
export default App;