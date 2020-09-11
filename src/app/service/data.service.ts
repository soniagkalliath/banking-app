import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails = {//accountdetail is an obj of bank
    1001: { name: "user1", accno: 1001, pin: 2345, pswd: "userone", balance: 3000, transactions: []},//another obj
    1002: { name: "user2", accno: 1002, pin: 2445, pswd: "usertwo", balance: 3000 , transactions: []},
    1003: { name: "user3", accno: 1003, pin: 2343, pswd: "userthree", balance: 3000 , transactions: []},
    1004: { name: "user4", accno: 1004, pin: 2245, pswd: "userfour", balance: 3000 , transactions: []},
    1005: { name: "user5", accno: 1005, pin: 2355, pswd: "userfive", balance: 3000, transactions: [] }
  }
  currentUser: any;

  saveDetails() {
    localStorage.setItem("accountDetails", JSON.stringify(this.accountDetails))
    if (this.currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
    }
  }

  getTransaction(){
return this.accountDetails[this.currentUser.accno].transactions;
  }
  getDetails() {
    if (localStorage.getItem("accountDetails")) {
      this.accountDetails = JSON.parse(localStorage.getItem("accountDetails"))
    }
    if (localStorage.getItem("currentUser")) {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser"))
    }
  }
  constructor() {
    this.getDetails()
  }
  register(name, accno, pin, pswd) {
    if (accno in this.accountDetails) {
      alert("Account is already exist. Please log in")
      return false;
    }
    this.accountDetails[accno] = {
      name,
      accno,
      pin,
      pswd,
      balance: 0,
      transactions: []
    }
    this.saveDetails()
    return true;
  }

  login(accno, pswd) {
    var accnum = parseInt(accno); //ngModule, here no as argument in login()
    var password1 = pswd;


    var data = this.accountDetails;

    if (accnum in data) {
      let pswd1 = data[accnum].pswd
      if (pswd1 == password1) {
        this.currentUser = data[accnum]
        this.saveDetails()
        return true
        // window.location.href="userhome.html"

      }
    }
  }

  deposit(accno, pin, amount) {

    var accnum = parseInt(accno); //ngModule, here no as argument in login()
    var userpin = pin;
    var useramount = parseInt(amount);
    var data = this.accountDetails;
    if (accnum in data) {
      let pin1 = data[accnum].pin
      if (pin1 == userpin) {
        data[accnum].balance += useramount
        data[accnum].transactions.push({
          amount:useramount,
          type:'Credit'
        })
        //return true
        this.saveDetails()
        // return (data[accnum].balance)
        return {
          status: true,
          Message: 'Amount credited successfully.',
          balance: data[accnum].balance
        }
      }

      else {
        return {
          status: false,
          Message: 'Incorrect account details.',
          //  balance:data[accnum].balance
        }
      }
    }


  }

  withdraw(accno, pin, amount) {

    var accnum = parseInt(accno); //ngModule, here no as argument in login()
    var userpin = pin;
    var useramount = parseInt(amount);


    var data = this.accountDetails;

    if (accnum in data) {
      let pin1 = data[accnum].pin

      if (data[accnum].balance < useramount) {
        return {
          status: false,
          Message: 'Insufficient balance.',
          balance: data[accnum].balance
        }
      }

      else if (pin1 == userpin) {

        data[accnum].balance -= useramount
        data[accnum].transactions.push({
          amount:useramount,
          type:'Debit'
        })
        this.saveDetails()
        //  //return true
        //  this.saveDetails()
        //   return (data[accnum].balance)
        return {
          status: true,
          Message: 'Amount debited successfully.',
          balance: data[accnum].balance
        }
      }

      else {
        return {
          status: false,
          Message: 'Incorrect account details.',

        }
      }
    }
    else {
      return {
        status: false,
        Message: 'Incorrect account details.',

      }
    }
  }
}