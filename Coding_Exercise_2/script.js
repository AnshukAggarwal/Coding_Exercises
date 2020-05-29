//1.convert the inputs to arrays
//2.add the values for each array
//3.add the values of same indexed items for each array
//if the result of 2 and 3 is same print magin else print not magic
let btn = document.getElementsByTagName('button')[0];
let result = document.getElementById('result');

//function to get values and convert into an array
function getValues(){
    let mainArray=[];
    document.querySelectorAll('.array').forEach(array=>{
        let myArray=[];
        array.querySelectorAll("input[type='number']").forEach(input=>{
            if(input.value){
                myArray.push(parseInt(input.value));
            }
        })
        mainArray.push(myArray);
    })
    return mainArray;
}
// function to add the column values
function addColumnValues(){
    let list=getValues();
    let sums = list[0].map(
        (x, idx) => list.reduce((sum, curr) => sum + curr[idx], 0)
    );
    //console.log(sums);
    return sums;
}
//function to add row values
function addRowValues(){ 
    let arrays = getValues();
    let sumRows=[];
    arrays.forEach(array=>{
        let sum=0;
        for(let i=0; i<array.length; i++){
            sum= sum+ array[i];
        }
        sumRows.push(sum);
    })
    return sumRows;
}
//function to check final result
function checkResult(){
    let rows= addRowValues();
    let columns = addColumnValues();
    let finalArray= rows.concat(columns);
    let finalOutput= finalArray.every(item=> item === finalArray[0]);

    if (finalOutput){
        result.textContent="Magic";
    }else{
        result.textContent ="No Magic";
    }
}

btn.addEventListener('click',checkResult);
