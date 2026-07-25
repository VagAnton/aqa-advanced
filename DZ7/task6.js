const numbersList = [1,10,14,2,4,5,43,34];
const copyNumbersList = [...numbersList]; 

function bubbleSort (array) {
    let isSwapped;
    for (let i = 0; i < array.length - 1; i++) {
    isSwapped = false;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return array;
}

const newList = bubbleSort(copyNumbersList);
console.log(newList);
