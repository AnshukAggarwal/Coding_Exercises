(function(){
    function calculate(){
        let firstNum= document.getElementById("num1").value;
        let secondNum= document.getElementById("num2").value;
        let myArray=[];
        let result= document.getElementById("result");

        for(let i=firstNum;i<=secondNum;i++){
            if(Math.sqrt(i) % 1 === 0 && Math.cbrt(i) % 1===0){
                myArray.push(i);
                
            }
        }
        result.textContent=`There are ${myArray.length} cool numbers between ${firstNum} and ${secondNum}.
        These are ${myArray}`;
    }

    document.getElementById("btn").addEventListener("click",calculate);

    

})();