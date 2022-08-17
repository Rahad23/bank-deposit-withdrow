
// function no 1

function inputValue(inputId){
    const getInput = document.getElementById(inputId);
    const getInputValue = getInput.value;
    const replaceStringToNumber = parseFloat(getInputValue);
    getInput.value = "";
    return replaceStringToNumber;
}

// function no 2

function htmlElementValue(valueHtml){
    const getHtml = document.getElementById(valueHtml);
    const getInnerText = getHtml.innerText;
    const replaceNumber = parseFloat(getInnerText);
    return replaceNumber;
}

// function no 3

function setTotalMoney(totalMoney){
    const totalMoneyId = document.getElementById(totalMoney);
    const getTotalMoney = totalMoneyId.innerText;
    const replaceTotalMoney = parseFloat(getTotalMoney);
    return replaceTotalMoney;
}

// function no 4

function setHtmlInnerText(setInnerTextId, setInnerText){
    const findId = document.getElementById(setInnerTextId);
    // console.log(findId.innerText, setInnerText);
    const setValue = findId.innerText = setInnerText;
    return setValue;
}



