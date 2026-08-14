import { fnCreateElement } from "../function/overall.js";
import { Todo } from "./Todo.js";


/**
 * @param {class} todo
 * 
 */
export class TodoDOM{
    #li = fnCreateElement('li',{'class': 'todo list-group-item d-flex align-items-center'})
    #input 
    #label1 
    #label2 = fnCreateElement('label',{'class':'ms-auto btn btn-danger btn-sm'})
    #i = fnCreateElement('i',{'class':'bi-trash'})
    #ul = document.querySelector('ul')
    vid

    constructor(todo){
        this.vid = `todo-${todo.id}`
        this.#input = fnCreateElement('input',{'class':'form-check-input','type':'checkbox','id':`${this.vid}`})
        this.#label1 = fnCreateElement('label',{'class':'ms-2 form-check-label','id':`${this.vid}`})
        
        this.#ul.appendChild(this.#li)
        this.#li.appendChild(this.#input)
        this.#li.appendChild(this.#label1)
        this.#label1.innerText= todo.title
        this.#li.appendChild(this.#label2)
        this.#label2.appendChild(this.#i)
    }
    
}


