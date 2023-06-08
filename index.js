document.getElementById("calculate").addEventListener("click", function(){
    let income=document.getElementById("income").value;
    let food=document.getElementById("food").value;
    let rent=document.getElementById("rent").value;
    let clothes=document.getElementById("clothes").value;
    if(income.length==0 || food.length==0 || rent.length==0 || clothes.length==0){
        alert ("please fill up all the information");
        return;
    }
    if(parseFloat(income)<0 || parseFloat(food)<0 || parseFloat(rent)<0 || parseFloat(clothes)<0){
        alert("please full valid input");
        return;
    }
    let expenses=parseFloat(food)+parseFloat(rent)+parseFloat(clothes);
    if(parseFloat(income)<parseFloat(expenses)){
        alert("spend your expenditure according to your income");
        return;
    }
    document.getElementById("totalexpenses").innerHTML=expenses;
    document.getElementById("balance").innerHTML=parseFloat(income)-parseFloat(expenses);

});
document.getElementById("save").addEventListener("click", function () {
    let balance = parseFloat(document.getElementById("balance").innerText);
    if (balance == 0)
    {
        alert("you have spend all the money.");
        return;
    }
    let percentage = document.getElementById("savepercentage").value;
    if (percentage.length==0 || parseFloat(percentage) < 0 || parseFloat(percentage) > 100)
    {
        alert("invalid saving percentage.");
        return;
    }
    let amount = (balance * parseFloat(percentage)) / 100;
    document.getElementById("savingamount").innerHTML = parseFloat(amount);
    document.getElementById("remainingamount").innerHTML = parseFloat(balance) - parseFloat(amount);
});
