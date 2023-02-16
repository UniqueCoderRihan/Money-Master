
function calculete(elementId){
    const ELements = document.getElementById(elementId);
    const FiledString = ELements.value;
    const Amount = parseInt(FiledString);
    ELements.value = '';
    return Amount;
}

function totalCost(){
    const food = calculete('food-filed');
    const cloth = calculete('cloth-filed');
    const rent = calculete('rent-filed');
    const total = food+cloth+rent;
    return total;
}

function setText(elementId, NewValue){
    const mainFiled = document.getElementById(elementId);
    const valueSet = mainFiled.innerText = NewValue;
}


document.getElementById('Calculete-btn').addEventListener('click',function(){
   const totalCostFiled = totalCost();
   const valueSetForTotal =setText('totalExpenses-filed',totalCostFiled);
})