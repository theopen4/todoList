import { todoList } from "./todoList.js";
import { fetchJson } from "./api.js";
import { createElements } from "./dom.js";
try {
const todos = await fetchJson('https://jsonplaceholder.typicode.com/posts?_limit=5')
console.log(todos);
const list = new todoList(todos);
list.appendTo(document.querySelector('#todolist'))

}
catch(e){
    const alertElement = createElements('div', {
        class: 'alert alert-danger m-2' ,
        role: 'alert'
    })
    alertElement.innerText = 'impossible de charger les elements'
    document.body.prepend(alertElement)
    console.log(alertElement)
}


