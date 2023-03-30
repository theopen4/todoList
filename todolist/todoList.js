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
            <main>
                <div class="btn-group gap-2 d-md-block">
                    <button class="btn btn-primary" type="button">Toutes</button>
                    <button class="btn btn-primary" type="button">A faire</button>
                    <button class="btn btn-primary" type="button">Faites</button>
                  </div>
                  <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Default checkbox <span><button type="button" class="btn btn-outline-danger">Danger</button></span>  </li>
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                        <label class="form-check-label" for="flexCheckChecked">
                            Checked checkbox
                        </label>
                  </div>
            </main>
        `
    }
}

class todoListItem {
    /**@type {Todo} */
    
    constructor(todo){
        const id =` todo-${todo.id}`
        const div = createElements('div', {
            class : 'form-check'
        })
        const checkbox = createElements('input',{
            class: 'form-check-input',
            type:  'checkbox',
            id
        })
        
        const label = document.createElements('label', {
            class: 'form-check-label',
            for: id
        })
        label.innerText = todo.title
    
        const button = document.createElements('button',{
            class: 'btn btn-outline-danger',
        })
        button.innerHTML = '<i class ="bi-trash"></i>'
        div.append(checkbox)
        div.append(label)
        div.append(button)
    }
    /**
     * 
     * @param {HTMLElement} element 
     */
    appendTo(element){

    }
}

