class User {

    constructor(id, name, password) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.userAccounts = new Map();
    }

    signIn(id, password){
        if(id == this.id && password == this.password){
            return true;
        }
        return false;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getUserAccounts() {
        return this.userAccounts;
    }

    addAccount(account) {
        this.userAccounts.set(account.getAccountNumber(), account);
    }

    removeAccount(accountNumber) {
        this.userAccounts.delete(accountNumber);
    }
}

export default User;