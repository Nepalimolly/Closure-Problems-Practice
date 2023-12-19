function createAccount(pin, amount = 0) {
  return {
    checkBalance(inputPin) {
      if (inputPin === pin) {
        return `Balance is ${amount}`;
      } else {
        return "Invalid PIN";
      }
    },
    deposit(inputPin, depositAmount) {
      if (inputPin === pin && depositAmount) {
        amount += depositAmount;
        return `Succesfully depositied $${depositAmount}. Current balance: $${amount}`;
      } else {
        return "Invalid PIN";
      }
    },
    withdraw(inputPin, withdrawAmount) {
      if (inputPin === pin && withdrawAmount) {
        amount -= depositAmount;
        return `Succesfully withdrew $${withdrawAmount}. Current balance: $${amount}`;
      } else {
        return "Invalid PIN";
      }
    },
    changePin(oldPin, newPin) {
      if (oldPin === pin && newPin) {
        pin = newPin;
        return "Pin successfully changed!";
      } else {
        return "Invalid Pin";
      }
    },
  };
}

module.exports = { createAccount };
