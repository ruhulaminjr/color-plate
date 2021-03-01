/**
 * Creates An Element based on the tag name
 * @param {string} tagName The name of the element (i.e "div",'img',etc)
 * @param {string} classes sets the class attribute .Multiple separted by a space
 * 
 * @return {HTMLElement} 
 */

 function createElementWithClass(tagname,classes){
     const ele = document.createElement(tagname);
    ele.setAttribute("class",classes);
     return ele;
 }
/**
 * 
 * @param {string} color background color of the element  
 * @param {*} desc description of the color ; 
 */
 function genarate(color,desc){
     let palatecontent = createElementWithClass('div','palatecontent');
    let paletItem = createElementWithClass('div','palate-color');
     let paletdesc = createElementWithClass('div','palate-desc');
     let paletinput = createElementWithClass('input','palete-input');

     paletItem.style.backgroundColor = color;
     paletdesc.textContent = desc;
     paletinput.value = color;
     
     palatecontent.appendChild(paletItem);
     paletItem.appendChild(paletdesc);
    palatecontent.appendChild(paletinput);

     paletinput.onfocus = () => paletinput.select();


     return palatecontent;
 }

 const palate = document.querySelector('.palete');

 fetch('data.json').then(response =>{
     return response.json();
 } ).then(colorlist => {
     for (const {hex,name} of colorlist){
        palate.appendChild(genarate(hex,name));

 }
}
 
);


