import { Component, OnInit } from '@angular/core';
import { Fund } from '../fund/fund.model';
import { FundService } from '../fund.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addfund',
  templateUrl: './addfund.component.html',
  styleUrls: ['./addfund.component.scss']
})
export class AddfundComponent implements OnInit {

  newName: string = "";
  newValue: number = 0;
  newReturn: number = 0;

  constructor(private fundService: FundService, private router: Router) { }

  ngOnInit(): void {
  }

  createFund(){
    let newFund: Fund = { 
      name: this.newName,
      value: this.newValue,
      return: this.newReturn
    }
    this.fundService.createFund(newFund).subscribe(createdFund=>{
      this.router.navigateByUrl(`/funds`);
    });
  }

}
