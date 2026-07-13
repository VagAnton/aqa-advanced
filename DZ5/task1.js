function calculateArea (height, width){
        return height * width;
};
let answer1 = calculateArea (5, 10);
console.log (`${answer1}`);


const Area2 = function(height, width){
    return height * width;
}
let answer2 = Area2(5,10)
console.log(`${answer2}`);


const Area3 = (height, width) => height * width;
let answer3 = Area3(5,10);
console.log(`${answer3}`);
