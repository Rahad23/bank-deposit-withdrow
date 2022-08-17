
// Action deposit btn
document.getElementById('deposit-btn').addEventListener('click',function(){

    const dipositInput = inputValue('deposit');
    console.log(dipositInput);

    if(dipositInput < 0){
        alert('Somthing worng');
        return;
    }

    const Dipositid = htmlElementValue('depostiMoney');

    const totalDiposit = dipositInput + Dipositid;
    const diposit = setHtmlInnerText('depostiMoney', totalDiposit);

    const getMoney = setTotalMoney('totalbalace');
    const totalMoney = getMoney + dipositInput;
    const balance = setHtmlInnerText('totalbalace', totalMoney);
    console.log(diposit, balance);

});

// Action withdrow btn
document.getElementById('withdrow-btn').addEventListener('click', function(){

    const withdrowInput = inputValue('withdrow-input');
    const getMoney = setTotalMoney('totalbalace');
    if(withdrowInput < 0){
        alert("Something Worng");
        return;
    }else if(withdrowInput > getMoney){
        alert('Apnar eto taka nai');
        return;
    }

    const Dipositid     = htmlElementValue('withdrowSet'); 
    const SubtractionDeposit = Dipositid + withdrowInput;
    setHtmlInnerText('withdrowSet', SubtractionDeposit);

    const totalMoney = getMoney - withdrowInput;
    setHtmlInnerText('totalbalace', totalMoney);
});