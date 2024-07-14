import {createContext, useContext} from "react"

export const TodoContext = createContext({  //we never provide the definations of the functions or anything in the TodoContext
    todos: [
        {
            id: 1,
            todo: "Todo Message",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
