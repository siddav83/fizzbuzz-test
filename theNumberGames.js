function multiplyBy3(num){
    return num * 3;
};

function add(num1, num2){
    return num1 + num2;
};

function fizzbuzz(num) {
    if(num % 15 == 0) {
        return "FizzBuzz"
    } else if (num % 3 == 0) {
        return "Fizz"
    } else if (num % 5 == 0) {
        return "Buzz"
}      else {
    return num
}
}

module.exports = { multiplyBy3, add, fizzbuzz }