const arr = [1, 2, null]


function evenOdd() {
  let noNumber = 0;
  let evenNumber = 0;
  let oddNumber = 0;
  for (let i = 0; i<arr.length; i++){
    if (typeof(arr[i]) === 'number'){
      if (isNaN(arr[i])){
        noNumber += 1
      }
      else if((arr[i] % 2) === 0) {
        evenNumber += 1
      }
      else{
        oddNumber += 1
      }
    }
    else{
        noNumber +=1
    }
  }
  console.log(noNumber, evenNumber, oddNumber);
}
evenOdd()