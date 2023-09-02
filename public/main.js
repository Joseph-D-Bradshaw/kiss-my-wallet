// User
const createUserBtn = document.getElementById('create-user')
const getUsersBtn = document.getElementById('get-users')
const usernameField = document.getElementById('username')
const userIdField = document.getElementById('userid')

// Category
const createCategoryBtn = document.getElementById('create-category')
const getCategoriesBtn = document.getElementById('get-categories')
const categoryField = document.getElementById('category')
const categoryIdField = document.getElementById('categoryid')
const budgetField = document.getElementById('budget')
const categoryUserIdField = document.getElementById('categoryUserIdField')

// Transaction
const createTransactionBtn = document.getElementById('create-transaction')
const getTransactionsBtn = document.getElementById('get-transactions')
const dateField = document.getElementById('date')
const amountField = document.getElementById('amount')
const transactionIdField = document.getElementById('transactionid')
const transactionUserIdField = document.getElementById('transaction-userid')
const transactionCategoryIdField = document.getElementById('transaction-categoryid')

const resultField = document.getElementById('result')

const writeToResultField = (toShow) => {
    resultField.innerHTML = JSON.stringify(toShow)
}

const postMethodAndHeader = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }
}

createUserBtn.addEventListener('click', () => {
    fetch("/users", {
        ...postMethodAndHeader,
        body: JSON.stringify({
            id: userIdField.value,
            name: usernameField.value
        })
    })
    .then(res => res.json())
    .then(data => writeToResultField(data))
    .catch(error => console.error(`Error: ${error}`))
})

createCategoryBtn.addEventListener('click', () => {
    fetch("/categories", {
        ...postMethodAndHeader,
        body: JSON.stringify({
            id: categoryIdField.value,
            name: categoryField.value,
            budget: budgetField.value,
            user_id: categoryUserIdField.value
        })
    }) 
    .then(res => res.json())
    .then(data => writeToResultField(data))
    .catch(error => console.error(`Error: ${error}`))
})

createTransactionBtn.addEventListener('click', () => {
    fetch("/transactions", {
        ...postMethodAndHeader,
        body: JSON.stringify({
            id: transactionIdField.value,
            date: dateField.value,
            amount: amountField.value,
            user_id: transactionUserIdField.value,
            category_id: transactionCategoryIdField.value
        })
    }) 
    .then(res => res.json())
    .then(data => writeToResultField(data))
    .catch(error => console.error(`Error: ${error}`))
    
})

getUsersBtn.addEventListener('click', () => {
    fetch("/users")
        .then(res => res.json())
        .then(data => writeToResultField(data))
})

getCategoriesBtn.addEventListener('click', () => {
    fetch("/categories")
        .then(res => res.json())
        .then(data => writeToResultField(data))
})

getTransactionsBtn.addEventListener('click', () => {
    fetch("/transactions")
        .then(res => res.json())
        .then(data => writeToResultField(data))
})
