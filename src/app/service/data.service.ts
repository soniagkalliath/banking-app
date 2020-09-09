import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails = {//accountdetail is an obj of bank
    1001: { name: "user1", accno: 1001, pin: 2345, pswd: "userone", balance: 3000 },//another obj
    1002: { name: "user2", accno: 1002, pin: 2445, pswd: "usertwo", balance: 3000 },
    1003: { name: "user3", accno: 1003, pin: 2343, pswd: "userthree", balance: 3000 },
    1004: { name: "user4", accno: 1004, pin: 2245, pswd: "userfour", balance: 3000 },
    1005: { name: "user5", accno: 1005, pin: 2355, pswd: "userfive", balance: 3000 }
  }
currentUser: any;
  constructor() { }
  register(username,accno,pin,pswd){
    if (accno in this.accountDetails){
      alert("Account is already exist. Please log in")
      return false;
    }
    this.accountDetails[accno]={
      username,
      accno,
      pin,
      pswd,
      balance:0
    }
    
    return true;
  }

  login(accno,pswd){
    var accnum = parseInt(accno); //ngModule, here no as argument in login()
    var password1 = pswd;
  
  
     var data = this.accountDetails;
  
      if (accnum in data) {
        let pswd1 = data[accnum].pswd
        if (pswd1 == password1) {
          this.currentUser=data[accnum]
          return true
          // window.location.href="userhome.html"
         
        }
      }  
  }

  deposit(accno,pin,amount){

    var accnum = parseInt(accno); //ngModule, here no as argument in login()
    var userpin = pin;
    var useramount= parseInt(amount);
  
  
     var data = this.accountDetails;
  
      if (accnum in data) {
        let pin1 = data[accnum].pin
        if (pin1 == userpin) {
         data[accnum].balance+=useramount
         //return true
          return (data[accnum].balance)
          // window.location.href="userhome.html"
         
        }
      }  

  }

  withdraw(accno,pin,amount){

    var accnum = parseInt(accno); //ngModule, here no as argument in login()
    var userpin = pin;
    var useramount= parseInt(amount);
  
  
     var data = this.accountDetails;
  
      if (accnum in data) {
        let pin1 = data[accnum].pin
        if (pin1 == userpin) {
         data[accnum].balance-=useramount
         //return true
          return (data[accnum].balance)
          // window.location.href="userhome.html"
         
        }
      }  

  }
}
