import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {
transactions=[];
  constructor(private dataService:DataService) { 
   this.transactions=dataService.getTransaction();
    
  }

  ngOnInit(): void {
  }

}
