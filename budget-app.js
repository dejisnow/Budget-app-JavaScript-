window.onload=()=>{
    
    
    let budgetBtn = document.querySelector(".budget_btn")
    let total = document.querySelector(".total")
    
    let main = document.querySelector(".main")
     let mainExpense = document.querySelector(".main_expense")
     let box = document.querySelector(".box")
    let save = document.querySelector(".save")
    let user = document.querySelector(".user")
    let budgetClose = document.querySelector(".budget_close")
    let expenseClose = document.querySelector(".expense_close")
//surplus and deficit span
let surplus = document.querySelector(".surplus")
let deficit = document.querySelector(".deficit")

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
    
  /*
  Adding prompts  
    let insertName = prompt("What is your name ?")
if(insertName ){
    
user.innerHTML = `${insertName} !`
}else{
user.innerHTML = "Player"
    
}
*/
//Budget button
    budgetBtn.addEventListener("click",()=>{
      main.style.display= "grid"  
      
        
        
    })
    
    //Closing opened modals
    
 budgetClose.addEventListener("click",()=>{
 main.style.display = "none"     
    })
    expenseClose.addEventListener("click",()=>{
 mainExpense.style.display = "none"
        
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
      
  budgetAmount.innerHTML =budgetTotal.value ==" " ? 0 : new Intl.NumberFormat('ng-NG', {style: 'currency', currency: 'NGN' }).format(budgetTotal.value);
  
 
   budgetNameBox.appendChild(budgetName )
   budgetAmountBox.appendChild(budgetAmount)
 budgetBalanceBox.appendChild(balanceAmount)
     amountArray.push(budgetTotal.value !== "" ? parseInt(budgetTotal.value):0)
   balanceResult = amountArray.reduce((a,b)=> a+b,0)
   budgetBalanceBox.innerHTML = new Intl.NumberFormat('ng-NG', {style: 'currency', currency: 'NGN' }).format(balanceResult) ;
    
   budgetHead.value = " "
   budgetTotal.value = " "
   
   
  totalBalance = balanceResult -  expenseResult 
  if(totalBalance < 0){
      total.classList.add("active")
      deficit.style.display="block"
      surplus.style.display = "none"
      
      
  }else if(totalBalance === 0){
      deficit.style.display="none"
      surplus.style.display = "none"
      total.classList.remove("active")
  }
  else{
      surplus.style.display= "block"
      deficit.style.display="none"
      total.classList.remove("active")
  }
   total.innerHTML =new Intl.NumberFormat('ng-NG', {style: 'currency', currency: 'NGN' }).format(totalBalance )
   
   
   
    
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
  

expenseName.innerHTML =  expenseHead.value;

expenseAmount.innerHTML = expenseTotal.value==" " ? 0: new Intl.NumberFormat('ng-NG', { style: 'currency', currency: 'NGN' }).format(expenseTotal.value);

expensesNameBox.appendChild(expenseName)
expensesAmountBox.appendChild(expenseAmount)
expenseBalanceBox.appendChild(expenseBalance)


   expenseArray.push(expenseTotal.value !== "" ? parseInt(expenseTotal.value):0)
 
  expenseResult = expenseArray.reduce((a,b)=> a+b,0)
   expenseBalanceBox.innerHTML = 
   new Intl.NumberFormat('ng-NG', { style: 'currency', currency: 'NGN' }).format(expenseResult);
 
   
   expenseHead.value = " "
   expenseTotal.value = " "
   
   totalBalance = balanceResult -  expenseResult 
   if(totalBalance < 0){
      total.classList.add("active")
      deficit.style.display="block"
      surplus.style.display = "none"
      
      
  }else if(totalBalance === 0){
      deficit.style.display="none"
      surplus.style.display = "none"
      total.classList.remove("active")
  }
  else{
      surplus.style.display= "block"
      deficit.style.display="none"
      total.classList.remove("active")
  }
   total.innerHTML =new Intl.NumberFormat('ng-NG', {style: 'currency', currency: 'NGN' }).format(totalBalance )
})
    
    
    
    }
