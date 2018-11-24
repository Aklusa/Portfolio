import {englishData, polishData} from './data'


let translateElems = [... document.querySelectorAll('[translateData]')];


let translateToEnglish = () => translateElems.map( element =>element.innerHTML = englishData[element.attributes.translatedata.value])
let translateToPolish = () =>translateElems.map( element =>element.innerHTML = polishData[element.attributes.translatedata.value])

let engButton = document.querySelector('.eng');
let plButton = document.querySelector('.pl');

engButton.addEventListener('click', translateToEnglish);
plButton.addEventListener('click', translateToPolish);

let navElems = [... document.querySelectorAll('[navElemName]')];
let displayElems = [... document.querySelectorAll('[displayName]')];



let showComponent = (e) => displayElems.map(function(elem){
    if(elem.attributes.displayname.value === e.target.attributes.navelemname.value){
        elem.style.display = 'flex';
    } else { elem.style.display = 'none';}
    
})

let addEvents = navElems.map(elem => elem.addEventListener("click", showComponent))