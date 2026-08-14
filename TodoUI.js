import { Todo } from "./class/Todo.js"
import { TodoDOM } from "./class/TodoDOM.js"
import { TodoList } from "./class/TodoList.js"
import { createDataObject } from "./function/overall.js"

const form = document.querySelector('form[class="d-flex pb-4"]')
const todolist = new TodoList()
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const title = new FormData(e.currentTarget)
    const getTitle= title.get('title')
    const test= createDataObject(getTitle)
    const todo = new Todo(test.id,test.title,test.completed)
    const todoDOM= new TodoDOM(todo,todolist)

    form.reset()
    
})

