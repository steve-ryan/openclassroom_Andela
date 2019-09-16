class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    showBalance() { //method just after the constructor
        console.log('Balance: ' + ' Ksh ' + this.balance);
    }
    deposit(amount) {
        console.log('Depositing ' + 'Ksh' + amount);
        this.balance += amount;
        this.showBalance();
    }
    widthdraw(amount) {
        if (this.balance < amount) {
            console.log("Withdraw denied due to insufficient account balance");
        } else {
            console.log('Withdrawing ' + ' Ksh' + amount);
            this.balance -= amount;
            this.showBalance();
        }
    }
}

const newAccount = new BankAccount('Steve Wachira', 1200);
const newShare = new BankAccount('cornelius', 1500);
// newAccount.showBalance(); //calling balance method
// newAccount.deposit(150);
newAccount.widthdraw(700);
