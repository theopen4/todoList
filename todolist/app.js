import { fetchJson } from "./api.js";
import { createElement } from "./dom.js";
try {
const todos = fetchJson('https://jsonplaceholder.typicode.com/posts?_limit=5')

}catch(e){
    const alertElement = createElement('div', {
        class: 'alert alert-danger',
        role: 'alert'
    })
    alertElement.innerText = "impossible de charger les elements"
    document.body.append(alertElement)
}

console.log(todos);