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
    if(!r.ok){
        throw new Error('erreur serveur');
        

    }
} catch(e){
    loader.innerText= 'impossible de charger les articles'
        loader.style.color = 'red';
        return

}    

}
main()