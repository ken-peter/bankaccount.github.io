function BankAccount(name, initialDeposit) {
  this.name = name;
  this.balance = initialDeposit;
}
BankAccount.prototype.deposit = function(cash) {
  this.balance = this.balance + cash;
}
BankAccount.prototype.withdraw = function(cash) {
  this.balance = this.balance - cash;
}
BankAccount.prototype.checkBalance = function() {
  return this.balance;
}


$(document).ready(function() {
  var accounts = [];

  $('button#btnRegister').click(function() {
    var name = $('input#name').val();
    var initialDeposit = parseInt($('input#initialDeposit').val());

    var account = new BankAccount(name, initialDeposit);
    accounts.push(account);

    $('#current-balance').text(accounts[0].checkBalance());
    $('input#name').val("");
    $('input#initialDeposit').val("");
  });

  $('button#btnDeposit').click(function() {
    var cash = parseInt($('input#deposit').val());
    accounts[0].deposit(cash);
    $('#current-balance').text(accounts[0].checkBalance());
    $('input#deposit').val("");
  });

  $('button#btnWithdraw').click(function() {
    var cash = parseInt($('input#withdraw').val());
    accounts[0].withdraw(cash);
    $('#current-balance').text(accounts[0].checkBalance());
    $('input#withdraw').val("");
  });
});
