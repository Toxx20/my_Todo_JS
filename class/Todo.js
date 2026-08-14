
/**
 * @param {id}id
 * @param {string}title
 * @param {boolean}completed
 */
export class Todo{
    #id
    #title 
    #completed
    constructor(id,title,completed){
        this.#id = id
        this.#title = title
        this.#completed = completed
    }

    get title(){
        return this.#title
    }
    get id(){
        return this.#id
    }
    get completed(){
        return this.#completed
    }
}



