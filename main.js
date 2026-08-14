import { Todo } from "./class/Todo.js";
import { TodoDOM } from "./class/TodoDOM.js";
import { TodoList } from "./class/TodoList.js";
import { FetchJSON } from "./function/api.js";
import { mapdata } from "./function/overall.js";
import './TodoUI.js'



const data = await FetchJSON('https://jsonplaceholder.typicode.com/todos?_limit=5')

const finaldata = mapdata(data)

finaldata.forEach((e) =>{
    const todo = new Todo(e.id,e.title,e.completed)
    //console.log(todo)
    const todoDom = new TodoDOM(todo)

    // console.log(todo.completed)
})




