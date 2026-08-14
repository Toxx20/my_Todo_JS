/**
 * 
 * @param {Array} arr 
 * @returns {[Object]}obj
 */
export function mapdata (arr){
    return arr.map((e) =>{
        const obj = {}
        obj['id']= e.id
        obj['title']= e.title
        obj['completed']= e.completed
        //console.log(obj)
        return obj
    })
}


/**
 * 
 * @param {HTMLElement} element 
 * @param {Object} obj 
 * @returns HTMLElement
 */
export function fnCreateElement(element,obj={}){
    const el = document.createElement(element)
    //console.log(el)
    for (const [key,value] of Object.entries(obj)){
        el.setAttribute(key,value)
    }
    // console.log(el)
    return el
}

/**
 * 
 * @param {string} e 
 * @returns {object}
 */
export function createDataObject(e){
    const obj = {}
    obj['id']= new Date().getUTCMilliseconds()
    obj['title']=e
    obj['completed']= false
    return obj
}
