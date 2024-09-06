import { createSlice , nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos : [{id : 1 , text : "код тут " , completed:false}] ,
  filter: 'all',
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo : (state , action) => {
     const todo = {
        id : nanoid(),
        text : action.payload ,
        completed: false,
     } ;
     state.todos.push(todo);
    },
    removeTodo : (state , action)=>{
      state.todos = state.todos.filter((todo)=>(
        todo.id !== action.payload ))
    } ,
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
})


export const {addTodo , removeTodo , toggleTodo, setFilter  } = todoSlice.actions;

export default todoSlice.reducer;