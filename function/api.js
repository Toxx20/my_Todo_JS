import { fnCreateElement } from "./overall.js"

/**
 * 
 * @param {'url'} url 
 * @param {method,headers,body} obj 
 * @returns {JSON}
 */


export async function FetchJSON(url,obj={}){
    try {
        const r= await fetch(url,{
            headers :{
                Accept:'Application/json'
            }
        })
        if(r.ok===true){
            const data = await r.json()
            return data
        }
        
    } catch (error) {
        const alert = fnCreateElement('div',{'class':'error'})
        alert.innerText = `Error: ${error}`
        document.body.prepend(alert)
    }

    
}