(function(){
    //Create a function to get all the values from the text boxes
    //Create a function to calculate the total hapiness level
    //Set-up an event listener for the submit button to call the calculateHapiness function

    
    
    function calculateHapiness(){
        //get the user inputs
        let userInputs= getValues();
		//userInputs is an array of all the values entered by the user
        let result = document.getElementById('result');//the result
        let hapiness= userInputs[0]+ (2*userInputs[1]) + (3*userInputs[2]);
        hapiness>10 ? result.textContent="Barley the dog is happy." : result.textContent="Barley the dog is sad."
    }

    const btn= document.getElementById('btn');

    btn.addEventListener('click',calculateHapiness)

    //function to get all the values.
    function getValues(){
        let valuesArray=[];
        document.querySelectorAll("input[type='number']").forEach(input=>{
            if(input.value){
                valuesArray.push(parseInt(input.value));
            }
        })
        return valuesArray;
    }


    

})();