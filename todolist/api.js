export async function fetchJson(url, options = {}){
    const header = {Accept: 'application/json', ...options.headers};
    const re= await fetch(url, { ...options, header});
    if(re.ok){
        return re.json();
    }
    throw new Error('erreur serveur',{cause: r})

}