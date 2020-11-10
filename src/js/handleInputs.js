function getNumberOfInputs(){
        let inputs=document.querySelectorAll('input , textarea')
        let Inputs=inputs;
        Inputs=Array.from(Inputs)  ;
        return Inputs;
    //получаю общее количество полей на странице
}
 
export default getNumberOfInputs;