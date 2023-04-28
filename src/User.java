package src;

import java.util.HashMap;
import java.util.Map;

/**
 * User class
 */

public class User {

    private String id;
    private String name;
    private Map<String, Account> userAccounts;

    public User(String id, String name) {
        this.id = id;
        this.name = name;
        this.userAccounts = new HashMap<>();
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Map<String, Account> getUserAccounts() {
        return userAccounts;
    }

    public void addAccount(Account account) {
        userAccounts.put(account.getAccountNumber(), account);
    }

    public void removeAccount(String accountNumber) {
        userAccounts.remove(accountNumber);
    }

}