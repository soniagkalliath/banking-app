import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  depositForm=this.fb.group({
   
    accno:['',[ Validators.required, Validators.minLength(3)]],
        pin:['',[ Validators.required]],
        amount:['',[Validators.required]]
  })
  
  
   withdrawForm=this.fb.group({
   
    accno1:['',[ Validators.required, Validators.minLength(3)]],
        pin1:['',[ Validators.required]],
        amount1:['',[Validators.required]]
  })
  

  constructor(public dataService:DataService,
    private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  getError(field){
    return (this.depositForm.get(field).touched||this.depositForm.get(field).dirty)&&this.depositForm.get(field).errors
      }

  deposit(){

    if(this.depositForm.valid){
    
  
      const result= this.dataService.deposit(this.depositForm.value.accno,this.depositForm.value.pin,this.depositForm.value.amount )
   
       if (result){
        // alert(this.accountDetails[accno])

         alert("Amount credited successfully. ")
         alert("Updated Balance is: "+result)
         //this.router.navigateByUrl("");
       }
      else{
        alert("Invalid Credantials")
      }}
       else{
         alert("Invalid Form")
       }
  }

  getwError(field){
    return (this.withdrawForm.get(field).touched||this.withdrawForm.get(field).dirty)&&this.withdrawForm.get(field).errors
      }

  withdraw(){

    if(this.withdrawForm.valid){
    
  
      const result= this.dataService.withdraw(this.withdrawForm.value.accno1,this.withdrawForm.value.pin1,this.withdrawForm.value.amount1 )
   
       if (result){
        // alert(this.accountDetails[accno])
       // alert(result)
         alert("Amount debited successfully. ")
         alert("Updated Balance is: "+result)
         //this.router.navigateByUrl("");
       }
      else{
        alert("Invalid Credantials")
      }
    }
       else{
         alert("Invalid Form")
       }
  }
}
