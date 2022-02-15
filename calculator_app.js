/*     const numberButtons = document.querySelectorAll('.number'),
    const optButtons = document.querySelectorAll('.operator'),
    const eraseButtons = document.querySelectorAll('.erase'),
    const decimalPointButton = document.querySelectorAll('.decimal') */
const isOperator = (element) => {
    if (element === '+'|| element === '-'|| element === '*'|| element === '/'){
        return true
    } return false
}
function add (a,b){
    return a+b
}
function multiply (a,b){
    return a*b
}
function substract (a,b){
    return a-b
}
function divide (a,b){
    if (b===0){
        return "Can't divide by zero"
    }else return a/b
}
let currentValue = [];
function operate(input){
    if (input === '='){
        return console.log(resolve(currentValue))
    }
    let lastChar = currentValue[currentValue.length-1]
    if (input === lastChar){
        return
    } else if (input === 'AC'){
        return currentValue = [] ;
    } else if (input === 'CE'){
        return currentValue.pop();
    } else if(input === '+'){
        return currentValue.push('+')
    } else if (input === '-'){
        return currentValue.push('-')
    } else if (input === '*'){
        return currentValue.push('*')
    } else if (input === '/'){
        return currentValue.push('/')
    } else if (input === '.'){
        if (currentValue.some((Element) => Element === '.')){
            return} else return currentValue.push('.')
    }   return currentValue.push(parseInt(input));
}
function addListeners(){
    const allButtons = document.querySelectorAll('.button');
    allButtons.forEach(Element => {
        Element.addEventListener('click', e =>{
        console.log(e.target.value);
        operate(e.target.value);
        console.log(currentValue)
        })
    })
}
addListeners();
function resolve(currentValue){
    let currentOperatorIndex = getOperator(currentValue)
    let currentOperator = currentValue[currentOperatorIndex]
    let firstSegment = currentValue.slice(0, currentOperatorIndex)
    let nextOperatorIndex = getNextOperator(currentValue,currentOperatorIndex)
    let secondSegment = currentOperator.slice(currentOperatorIndex+1, nextOperatorIndex-1)
    let result = calculate(currentOperator,firstSegment,secondSegment);
    let 
    currentOperatorIndex = getNextOperator(currentValue, currentOperatorIndex)
    if (currentOperatorIndex === -1){
        return result
    }
}
function getOperator(currentArray){
    return currentArray.findIndex(isOperator)
}
function getNextOperator(currentValue, currentOperatorIndex){
    nextArraySegment = currentValue.slice(currentOperatorIndex+1)
    return nextArraySegment.findIndex(isOperator)
}
function calculate(currentOperator,firstSegment,secondSegment){
    firstNumber = parseInt(firstSegment.join(''));
    secondNumber = parseInt(secondSegment.join(''));
    if (currentOperator === '+'){
        return add(firstNumber,secondNumber);
    } else if (currentOperator === '-'){
        return substract(firstNumber,secondNumber);
    } else if (currentOperator === '*'){
        return multiply(firstNumber,secondNumber);
    } else if (currentOperator === '/'){
        return divide(firstNumber,secondNumber);
    }
}
function getOperatorInstances (currentValue){
    let howManyOperators = 0;
    let slicedArray = []
    let currentOperatorIndex = getOperator(currentValue);
        while (currentOperatorIndex > -1){
        slicedValue = currentValue.slice(currentOperatorIndex+1)
        currentOperatorIndex = getOperator(slicedValue);
        howManyOperators++
        } return howManyOperators
    }