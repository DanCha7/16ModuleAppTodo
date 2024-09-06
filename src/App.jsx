import './App.css'
import AddTodo from './components/AddTodo';
import Filter from './components/Filter';
import Todos from './components/Todos';

function App() {
  return (
    <div className='App'>
      <h1>TodoList</h1>
      <AddTodo />
      <Filter />
      <Todos />
    </div>
  )
}
export default App;
