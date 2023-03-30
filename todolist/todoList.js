import { createElements } from "./dom.js"
/**
 * @typedef {object} Todo
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 */

export class todoList{
    /**@type {Todo[]} */
    #todos = []
    /**@param {Todo[]} todos */
    constructor(todos){
        this.#todos = todos
    }
    /**@param {HTMLElement}element */
    appendTo(element){
        element.innerHTML = `
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Ajouter</button>
        </div>    
            <main class = "mainclass">
                <div class="btn-group gap-2 d-md-block">
                    <button class="btn btn-primary" type="button">Toutes</button>
                    <button class="btn btn-primary" type="button">A faire</button>
                    <button class="btn btn-primary" type="button">Faites</button>
                  </div>
            </main>
        `
        const list = element.querySelector('.mainclass')
            for(let todo of this.#todos){
                const t = new todoListItem(todo)
                t.appendTo(list)
            }
    }
}

class todoListItem {
    /**@type {Todo} */
     #element
     
    constructor(todo){
        const id =`todo-${todo.id}`
        const div = createElements('div', {
            class: 'form-check'
        })
        const checkbox = createElements('input',{
            class: 'form-check-input',
            type:  'checkbox',
            value:"",
            id,
            checked: todo.completed
        })
        
        const label = createElements('label', {
            class: 'form-check-label',
            for: id
        })
        label.innerText = todo.title
    
        const button = createElements('button',{
            class: 'btn btn-outline-danger',
        })
        button.innerHTML='<i class="bi-trash"></i>'
        div.append(checkbox)
        div.append(label)
        div.append(button)
        this.#element = div
    }
    /**
     * 
     * @param {HTMLElement} element 
     */
    appendTo(element){
        element.append(this.#element)

    }
}


