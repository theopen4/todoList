import { fetchJson } from "./api.js";
import { createElements } from "./dom.js";
try {
const todos = fetchJson('https://jsonplaceholder.typicode.com/posssts?_limit=5')
console.log(todos);

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


