import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
   registerForm=this.fb.group({
     name:['',[ Validators.required]],
     accno:['',[ Validators.required, Validators.minLength(3)]],
     pswd:['',[ Validators.required]],
     pin:['',[ Validators.required]]
   })

  constructor(private fb:FormBuilder,
    private router:Router,
    private dataService:DataService) { }

  ngOnInit(): void {
  }

  getError(field){
return (this.registerForm.get(field).touched||this.registerForm.get(field).dirty)&&this.registerForm.get(field).errors
  }
register(){
  // alert("Register")
  if(this.registerForm.valid){
    
  
   const result= this.dataService.register(this.registerForm.value.username,this.registerForm.value.accno,this.registerForm.value.pswd,this.registerForm.value.pin )

    if (result){
     // alert(this.accountDetails[accno])
      alert("Account created successfully. Please Log in.")
      this.router.navigateByUrl("");
    }}
    else{
      alert("Invalid Form")
    }
}
}
