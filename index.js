class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

  commit(){
    if(this.account.balance + this.value < 0) {
      console.log("can't");
      return;
    }
    this.time = new Date();
    this.account.addTransaction(this);
  }

}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}

class Deposit extends Transaction{

  get value() {
    return this.amount;
  }

}

class Account {

  constructor(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.transactions = [];
  }

  get balance() {
    let sum = 0;
    this.transactions.forEach(transaction => sum += transaction.value);
    return sum;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol");

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
//console.log('Transaction 1:', t1.value);

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
//console.log('Transaction 2:', t2.value);

console.log('Balance:', myAccount.balance);
