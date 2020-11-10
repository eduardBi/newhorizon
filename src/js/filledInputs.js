
import Inputs from  './handleInputs.js';

function getInputValue(){
        let inputs=Inputs();
        let filledInputs=inputs.filter(item=>item.value!=='');
        return filledInputs
        //проверяю количство заполненных полей
}
 
export default getInputValue;