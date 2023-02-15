// frist btn handler
document.getElementById('Calculete-btn').addEventListener('click', function(){
    const incomeELements = document.getElementById('income-filed');
    const incomeFiledString = incomeELements.value;
    const incomeAmount = parseInt(incomeFiledString);
    incomeELements.value = '';
    if(incomeAmount >0){
        const foodELement = document.getElementById('food-filed');
        const foodFiledString = foodELement.value;
        const foodFiledAmount = parseInt(foodFiledString);
        foodELement.value = '';
        if(foodFiledAmount >= 0){
            const clothElement = document.getElementById('cloth-filed');
            const clothFiledString = clothElement.value;
            const clothFiledAmount = parseInt(clothFiledString);
            clothElement.value = '';
            if(clothFiledAmount >= 0){
                const rentElement = document.getElementById('rent-filed');
                const rentFiledString = rentElement.value;
                const rentFiledAmount = parseInt(rentFiledString);
                rentElement.value = '';
                
                if(rentFiledAmount >= 0){
                    const totalExpenses = foodFiledAmount + clothFiledAmount+ rentFiledAmount;
                    const expensesElement = document.getElementById('totalExpenses-filed');
                    expensesElement.innerText = totalExpenses;
                    const currentBalanceElement = document.getElementById('currentBalance-filed');
                    const NewBalance = incomeAmount - totalExpenses;
                    if(NewBalance >= 0){
                        currentBalanceElement.innerText = NewBalance;
                        document.getElementById('save-btn').addEventListener('click', function(){
                            const parsentiesElement = document.getElementById('save-parsenties');
                            const parsetiesFiledString = parsentiesElement.value;
                            const parsenties = parseFloat(parsetiesFiledString);
                            parsentiesElement.value = '';
                            if(parsenties <= 100){
                                const calculetion = incomeAmount/100*parsenties;
                                const remainingBalance = NewBalance - calculetion;

                                const saveingELement = document.getElementById('saveingAmount-filed');
                                saveingELement.innerText = calculetion;
                                
                                const remainingElement = document.getElementById('RemainingBalance-filed');
                                remainingElement.innerText = remainingBalance;
                            }
                            else{
                                alert('Dur Mia! 100 % er Upore Save Kemne Korba.?')
                            }
                        })
                    }
                    else{
                        alert('Your Income Is Less Than Your Masti! So Focus On Your Carrer Not On Forti! Your Loan Is  '+ NewBalance  +'Takaa');
                    }
                }
                else{
                    alert('You Need To fix TypeError.Solution: We Recived Only Positive Number.');
                }
            }
            else{
                alert('TypeError On CLOTHFILED: Oop! You Need To give Input Must Must Must Positive Number , OtherWays My Progrram Will Be Stop!')
            }
        }
        else{
            alert('TypeError On FOOD FIled: You Need To Give Input Must Be A Positive Number.')
        }
        
    }
    else{
        alert('Danger!! You Should Must Follow Some Rules:1) Positive Number without Zero.2) You can not give Word as a input, and Bolean Type. & Other Negative Number');
    }

})