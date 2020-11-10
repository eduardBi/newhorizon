import Inputs from  './handleInputs.js';
import FilledInputs from  './filledInputs.js';

let Form=document.querySelector('form');

Form.addEventListener('submit',(e)=>{    
        
            
    
        e.preventDefault();
    
        
        
        
        
        let succesMsg=document.querySelector('.success-msg');
        let isExist=succesMsg.children[2].innerHTML==='заполните все поля'||''? true:false;
    //проверяю есть ли элемент чтобы предотвратить повторное выполнение скрипта
        
    
        if(Inputs().length===FilledInputs().length){
            //проверяю заполнены ли все инпуты
            succesMsg.children[2].innerHTML="отправлено"
            succesMsg.children[2].style.color="green";
            Form.classList.toggle('show');
            Form.classList.toggle('check');
            
            
            setTimeout(()=>{
                    Form.classList.toggle('show');
                    Form.classList.toggle('check');
                //запускаю анимацию
                    
            },1700)
            
            setTimeout(()=>{
                
                succesMsg.children[2].innerHTML=""
                //возвращаю начальное значение 
                    
            
            },2000)
            
        }else if(Inputs().length!==FilledInputs().length && !isExist){
          //проверяю есть ли элемент чтобы предотвратить повторное выполнение скрипта
            
            succesMsg.children[2].innerHTML="заполните все поля"
            Form.classList.toggle('show');
            Form.classList.toggle('cross');
            succesMsg.children[2].style.color="red";
            
            setTimeout(()=>{

                    Form.classList.toggle('show');
                    Form.classList.toggle('cross');
                
            },1700)
            
            setTimeout(()=>{
                
                    
                    succesMsg.children[2].innerHTML=""
            
            },2000)
            
        }

        
        
});
export  default Form;