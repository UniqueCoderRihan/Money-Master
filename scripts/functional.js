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


document.getElementById('Calculete-btn').addEventListener('click',function(){
   
})