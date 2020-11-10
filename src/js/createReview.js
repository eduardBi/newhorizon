function createReview([name,value,date]){
    let infoArray=[name,date,value];
    //создаю массив с данными получеными с clearForm
    
    let uspdetedList=document.querySelector('.reviews-wrapper');
    let template=document.querySelector('.reviews-wrapper-item:first-child');//получаю образец отзыва
    
    let oldElement=template.cloneNode(true);
    uspdetedList.prepend(oldElement);
    uspdetedList.removeChild(uspdetedList.children[1]);
    //возвращаю полученный образец ,удаляю копию  нового коментария который вставляеется в начало  
    
    
    
    
    for(let i=0; i<Array.from(template.children[1].children).length; i++){
        
        template.children[1].children[i].innerHTML=infoArray[i];
        //модифицирую образец полученными данными
    }
    
    
    let newEl=template.cloneNode(true);
    
    let userPic= document.createElement('div');
    newEl.removeChild(newEl.children[0]);
    newEl.prepend(userPic);
    newEl.children[0].classList.add('reviews-item-img');
    newEl.children[0].classList.add('user-pic-bg');
    //добовляю дефолтное изображение
    uspdetedList.appendChild(newEl);
    

    
}
export default createReview;