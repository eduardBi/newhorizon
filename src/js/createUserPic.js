//createUserPic.js

document.addEventListener("DOMContentLoaded", function(e) { 
    
    
    let Imgs=document.querySelectorAll('img');
    for(let i=0 ; i<Imgs.length;i++){
        let imgId=i%3+1;
        Imgs[i].setAttribute('src',require(`../img/${imgId}.png`).default)
        //поочередно каждому из пользывателей добавляю картинку в наростающем порядке
    }
        
    
});