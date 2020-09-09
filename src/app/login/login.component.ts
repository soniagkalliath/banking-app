import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  loginForm=this.fb.group({
        accno:['',[ Validators.required, Validators.minLength(3)]],
    pswd:['',[ Validators.required]]
    
  })

  constructor(private router:Router,
    private dataService:DataService,
    private fb:FormBuilder) { }

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
  getError(field){
    return (this.loginForm.get(field).touched||this.loginForm.get(field).dirty)&&this.loginForm.get(field).errors
      }
  login(){
    if(this.loginForm.valid){
    
  
      const result= this.dataService.login(this.loginForm.value.accno,this.loginForm.value.pswd)
   
       if (result){
        // alert(this.accountDetails[accno])
         alert("Logged in successfully .")
         this.router.navigateByUrl("dashboard");
       }
       else{
         alert("Invalid Credentials")
       }
      }
       else{
         alert("Invalid Form")
       }
    
  // login(useraccnum,userpswd){
    // var accnum = this.accno; // event binding method here event as argument in login()
    // var password1 = this.pswd;

  //   var accnum = parseInt(useraccnum.value); //template offensing, here useraccnum,userpswd as argument in login()
  //   var password1 = userpswd.value;
  //  // alert(accnum + " , " + password1)
   
 
  }

}
