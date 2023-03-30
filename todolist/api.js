export async function fetchJson(url, options = {}){
    const headers = {Accept: 'application/json', ...options.headers};
    const reponse= await fetch(url, {...options, headers});
    if(reponse.ok){
        return reponse.json();
    }
    throw new Error('erreur serveur',{cause: r})

}