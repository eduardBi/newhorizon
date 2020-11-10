import NumberOfInputs from  './handleInputs.js';
import FilledInputs from  './filledInputs.js';
import createReview from  './createReview.js';


let isInViews= document.querySelector('.reviews-wrapper');
//определяю находится ли  пользыватель на странице "оставить отзыв"






let Form=document.querySelector('form').addEventListener('submit',(e)=>{
        e.preventDefault();
        
            
            let valueFilledInputs=FilledInputs();
            let valueNumberOfInputs=NumberOfInputs();
            if(valueFilledInputs.length===valueNumberOfInputs.length){
            //сравниваю общее количество инпутов и  заполненных инпутов
                
                let infoForReview=[];
                
                if(isInViews){
                    //если пользыватель на странице "оставить отзыв" создаю массив с данными в инпутах
                    valueNumberOfInputs.map(item=>{
                            item=Array.from(item.value);
                            item=item.join('');
                            infoForReview=[...infoForReview,item]
                            
                    })
                    let date=` ${new Date().getDay()} ${new Date().getMonth()}   ${new Date().getFullYear()}`
                    infoForReview=[...infoForReview,date]
                    createReview(infoForReview);
                    //отправляю данные в импортированную функцию "createReview" на создание нового отзыва
                }
                
                valueNumberOfInputs.map(item=>item.value='');
                    //очищаю инпуты
            }
        
});
export  default Form;