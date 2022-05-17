import fetch from "node-fetch";

async function checaStatus(arrayURL){
    const arrayStatus = await Promise.all(arrayURL.map (async url => {
        const res = await fetch(url)
        return res.status
    }))
    return arrayStatus;
}

function geraArrayDeURL(arraylinks){
    return arraylinks.map(objetoLink => Object.values(objetoLink).join())
}

async function validarURL(arraylinks){
    const links = geraArrayDeURL(arraylinks);
    const statusLinks = await checaStatus(links);
    return statusLinks;
}



export default validarURL;