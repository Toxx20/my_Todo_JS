import { Todo } from "./Todo.js"

/**
 * @param {Array} todos
 * @param {String} filter
 */
export class TodoList{
    #todos=[]
    #filter = 'toutes'
    constructor(todos,filter){
        this.#todos=todos
        this.#filter=filter
    }
}
