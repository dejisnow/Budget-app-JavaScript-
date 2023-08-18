window.onload=()=>{
    
    
    let budgetBtn = document.querySelector(".budget_btn")
    let total = document.querySelector(".total")
    
    let main = document.querySelector(".main")
     let mainExpense = document.querySelector(".main_expense")
    let save = document.querySelector(".save")
    let user = document.querySelector(".user")

    let budgetNameBox = document.querySelector(".budgetNameBox")
    let budgetAmountBox = document.querySelector(".budgetAmountBox")
    
    //Expenses Container
let expenseBtn = document.querySelector(".expense_btn")
    let expensesNameBox = document.querySelector(".expensesNameBox")
    let expensesAmountBox = document.querySelector(".expensesAmountBox")
    let expenseSaver = document.querySelector(".expenseSaver")
    
    //Balance container
let budgetBalanceBox = document.querySelector(".budgetBalanceBox")
let expenseBalanceBox = document.querySelector(".expenseBalanceBox")
    
    
    
    //Budget Input
    let budgetHead = document.querySelector(".budgetHead")
    let budgetTotal = document.querySelector(".budgetTotal")
    
    //Expense Input
let expenseHead = document.querySelector(".expenseHead")
    let expenseTotal = document.querySelector(".expenseTotal")
    
    
    let insertName = prompt("What is your name ?")
if(insertName ){
    
user.innerHTML = `${insertName} !`
}else{
user.innerHTML = "Player"
    
}
//Budget button
    budgetBtn.addEventListener("click",()=>{
      main.style.display= "grid"  
        
        
    })
    
    
    
    let amountArray = [];
    let expenseArray = [];
    let expenseResult = 0;
    let balanceResult = 0;
    let totalBalance = 0;
    
// Budget container 
    save.addEventListener("click",(e)=>{
       e.preventDefault()
       
       expenseBtn.style.display = "flex"
      main.style.display= "none"  
    let budgetName = document.createElement("p")
   let budgetAmount = document.createElement("p")
   let balanceAmount = document.createElement("p")
   
      budgetName.innerHTML = budgetHead.value
  budgetAmount.innerHTML = new Intl.NumberFormat('ng-NG', {style: 'currency', currency: 'NGN' }).format(budgetTotal.value);
  
 
   budgetNameBox.appendChild(budgetName )
   budgetAmountBox.appendChild(budgetAmount)
 budgetBalanceBox.appendChild(balanceAmount)
     amountArray.push(parseInt(budgetTotal.value))
   balanceResult = amountArray.reduce((a,b)=> a+b,0)
   budgetBalanceBox.innerHTML =new Intl.NumberFormat('ng-NG', {style: 'currency', currency: 'NGN' }).format(balanceResult);
    
   budgetHead.value = " "
   budgetTotal.value = " "
   
   
    
    })
    
    
    
    //Add expense button
    expenseBtn.addEventListener("click",()=>{
      mainExpense.style.display= "grid"   
    })
    
    //Expenses saver

expenseSaver.addEventListener("click",(e)=>{
    e.preventDefault()
    
   mainExpense.style.display= "none"  
    let expenseName = document.createElement("p");
   let expenseAmount = document.createElement("p");
   let expenseBalance = document.createElement("p");
  
expenseName.innerHTML = expenseHead.value;
expenseAmount.innerHTML = new Intl.NumberFormat('ng-NG', { style: 'currency', currency: 'NGN' }).format(expenseTotal.value);

expensesNameBox.appendChild(expenseName)
expensesAmountBox.appendChild(expenseAmount)
expenseBalanceBox.appendChild(expenseBalance)


   expenseArray.push(parseInt(expenseTotal.value))
 
  expenseResult = expenseArray.reduce((a,b)=> a+b,0)
   expenseBalanceBox.innerHTML = 
   new Intl.NumberFormat('ng-NG', { style: 'currency', currency: 'NGN' }).format(expenseResult);
 
   
   expenseHead.value = " "
   expenseTotal.value = " "
   
   totalBalance = balanceResult -  expenseResult 
   total.innerHTML = totalBalance 
})
    
    
    
}
