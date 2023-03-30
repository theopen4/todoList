/**
 * @typedef {object} Todo
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 */

export class todoList{
    #todos = []
    constructor(todos){
        this.#todos = todos
    }
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
            </main>
        `

    }
}