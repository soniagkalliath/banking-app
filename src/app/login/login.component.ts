import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accountDetails = {//accountdetail is an obj of bank
    1001: { name: "user1", accno: 1001, pin: 2345, pswd: "userone", balance: 3000 },//another obj
    1002: { name: "user2", accno: 1002, pin: 2445, pswd: "usertwo", balance: 3000 },
    1003: { name: "user3", accno: 1003, pin: 2343, pswd: "userthree", balance: 3000 },
    1004: { name: "user4", accno: 1004, pin: 2245, pswd: "userfour", balance: 3000 },
    1005: { name: "user5", accno: 1005, pin: 2355, pswd: "userfive", balance: 3000 }
  }
   accno="";
   pswd="";
  constructor() { }

  ngOnInit(): void {
  }

  // accnochange(event){
  //   alert("Account number changed")
  //   this.accno= event.target.value 
  // }

  // pswdchange(event){
  //   alert("password number changed")
  //   this.pswd= event.target.value 
  // }

  login(){
  // login(useraccnum,userpswd){
    // var accnum = this.accno; // event binding method here event as argument in login()
    // var password1 = this.pswd;

  //   var accnum = parseInt(useraccnum.value); //template offensing, here useraccnum,userpswd as argument in login()
  //   var password1 = userpswd.value;
  //  // alert(accnum + " , " + password1)
   
  var accnum = parseInt(this.accno); //ngModule, here no as argument in login()
  var password1 = this.pswd;


   let data = this.accountDetails;

    if (accnum in data) {
      let pswd1 = data[accnum].pswd
      if (pswd1 == password1) {
        alert("Successful login")
        window.location.href="userhome.html"
      }
      else {
        alert("Incorect password")
      }
    }
    else {
      alert("User doesnot exist")
    }
  }

}
