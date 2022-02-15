const mainScreen = document.querySelector('.result');
const previous = document.querySelector('.previous')
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
        return currentValue = resolve(currentValue)
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
        mainScreen.textContent = getMainScreen(currentValue);
        resetIfSolved(currentValue)
        console.log(currentValue)
        })
    })
}
addListeners();
function resolve(currentValue){
    let dividedArray = splitIntoSegments(currentValue)
    let result = calculateEach(dividedArray)

    return result
}
function getOperator(currentArray){
    return currentArray.findIndex(isOperator);
}
function getNextOperator(currentValue, currentOperatorIndex){
    let nextArraySegment = currentValue.slice(currentOperatorIndex+1)
    return nextArraySegment.findIndex(isOperator)
}
function calculate(currentOperator,firstSegment,secondSegment){
    if (Array.isArray(firstSegment)){
    firstNumber = parseFloat(firstSegment.join(''));
} else {
    firstNumber = firstSegment;
}
    secondNumber = parseFloat(secondSegment.join(''));
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
function splitIntoSegments(currentValue){
    let segmentedArray =[]
    let startIndex = 0
    let currentOperatorIndex = 0
    if (getOperator(currentValue)=== -1){
        return currentValue
    } else {
        currentOperatorIndex = getOperator(currentValue)
        while (currentOperatorIndex > -1){
            segmentedArray.push(parseFloat((currentValue.slice(startIndex,currentOperatorIndex).join(''))))
            segmentedArray.push((currentValue.slice(currentOperatorIndex,currentOperatorIndex+1).join('')))
            currentValue = currentValue.slice(currentOperatorIndex+1)
            currentOperatorIndex = getOperator(currentValue)
        } segmentedArray.push(parseFloat(currentValue.join('')))
        return segmentedArray
    }
}
function calculateEach(dividedArray){
    let currentOperatorIndex = getOperator(dividedArray)
    if (currentOperatorIndex === -1){
        return parseFloat(dividedArray.join(''));
    } else {
            let currentOperator = dividedArray[currentOperatorIndex]
            let firstSegment = dividedArray.slice(0,currentOperatorIndex)
            let secondSegment = dividedArray.slice(currentOperatorIndex+1,currentOperatorIndex+2)
            let result = calculate(currentOperator,firstSegment,secondSegment)
            let slicedArray = dividedArray.slice(currentOperatorIndex+2)
            currentOperatorIndex = getOperator(slicedArray)
            if (currentOperatorIndex > -1){
                secondSegment = slicedArray.slice(currentOperatorIndex+1,currentOperatorIndex+2)
                currentOperator = slicedArray[currentOperatorIndex]
                result = calculate(currentOperator,result,secondSegment);
            }
            return result
    } 
    
}
    function getMainScreen(currentValue){
        if (Array.isArray(currentValue)){
            return currentValue.join('');
        } else {
            return currentValue;
    }
}
function resetIfSolved(currentArray){
    if (!Array.isArray(currentArray)){
        currentValue = [];
    return 
}}