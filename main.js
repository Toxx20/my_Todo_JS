import { Todo } from "./class/Todo.js";
import { TodoDOM } from "./class/TodoDOM.js";
import { TodoList } from "./class/TodoList.js";
import { FetchJSON } from "./function/api.js";
import { mapdata } from "./function/overall.js";
import './TodoUI.js'



const data = await FetchJSON('https://jsonplaceholder.typicode.com/todos?_limit=5')

const finaldata = mapdata(data)
const todoList = new TodoList()

finaldata.forEach((e) =>{
    const todo = new Todo(e.id,e.title,e.completed)
    todoList.add(todo)
    //console.log(todo)
    new TodoDOM(todo,todolist)

    // console.log(todo.completed)
})

const buttons = document.querySelectorAll('[data-filter]')

buttons.forEach(button => {
    button.addEventListener('click', () => {

        const filter = button.dataset.filter

        const todos = todoList.filter(filter)

        TodoDOM.clear()

        todos.forEach(todo => {
            new TodoDOM(todo, todoList)
        })
    })
})




