/**
 * 
 * @param {{title: string, body: string}} post 
 * @returns {HTMLElement}
 */ 
 function createArticle(post){
    const article = document.createElement('article');
    article.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
          `
        return article;  

 }
 async function main (){
    const wrapper = document.querySelector('#lastPosts');
    const loader = document.createElement('p');
    loader.innerText = 'chargements';
    wrapper.append(loader);
    try{
    const r = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5',{
       headers:{
           Accept: 'application/json'
       }
    })
    const posts = await r.json();
    if(!r.ok){
        throw new Error('erreur serveur');
        

    }
    
    loader.remove()
    for(let post of posts){
        wrapper.append(createArticle(post));

    }
} catch(e){
    loader.innerText= 'impossible de charger les articles'
        loader.style.color = 'red';
        return

}    

}
main()