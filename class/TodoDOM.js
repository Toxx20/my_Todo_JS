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
    #label2 
    #i = fnCreateElement('i',{'class':'bi-trash'})
    #ul = document.querySelector('ul')
    vid

    constructor(todo){
        this.vid = `todo-${todo.id}`

        if(todo.completed===true){
            this.#input = fnCreateElement('input',{'class':'form-check-input','type':'checkbox','id':`${this.vid}`,'checked':'test'})
        }else{
            this.#input = fnCreateElement('input',{'class':'form-check-input','type':'checkbox','id':`${this.vid}`})
        }

        this.#label1 = fnCreateElement('label',{'class':'ms-2 form-check-label','for':`${this.vid}`})
        this.#label2 = fnCreateElement('label',{'class':'ms-auto btn btn-danger btn-sm','for':`${this.vid}`})
        this.#ul.prepend(this.#li)
        this.#li.appendChild(this.#input)
        this.#li.appendChild(this.#label1)
        this.#label1.innerText= todo.title
        this.#li.appendChild(this.#label2)
        this.#label2.appendChild(this.#i)

        this.#label2.addEventListener('click',(e)=>{
            this.#li.remove()
        })
    }
    
}




