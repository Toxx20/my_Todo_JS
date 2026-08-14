import { Todo } from "./Todo.js"

/**
 * @param {Array} todos
 */
export class TodoList{
    #todos = []
    constructor(todos=[]){
        this.#todos=todos

    }    
    add(todo) {
        this.#todos.push(todo)
    }
    remove(id) {
        this.#todos = this.#todos.filter(todo => todo.id !== id)
    }
    get todos() {
        return this.#todos
    }
    filter(filter) {
    if (filter === 'all') {
            return this.#todos
        }

        if (filter === 'todo') {
            return this.#todos.filter(todo => todo.completed === false)
        }

        if (filter === 'done') {
            return this.#todos.filter(todo => todo.completed === true)
        }
    }
}
