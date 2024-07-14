import React from 'react'
import { useState } from 'react'
import {useTodo} from "../contexts/TodoContext"

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo() //useTodo is th provider of all the functions in the todo
    
    const add = (e) => {
        e.preventDefault(); 
        if (!todo) return;
        addTodo({todo, completed: false}); //addTodo is a function declared somewhere else and as this component has the access of the contet and as it has used the useTodo method to import it thus 
        setTodo("");
    }
  return (
    <form onSubmit={add} className='flex'>
        <input type="text" placeholder='Write Todo...' className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'  value={todo}
        onChange={(e) => setTodo(e.target.value)} />
        <button type="submit" className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'>Add</button>
    </form>
  )
}

export default TodoForm;
