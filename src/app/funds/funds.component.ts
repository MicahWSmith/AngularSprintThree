import { Component, OnInit } from '@angular/core';
import { FundService } from '../fund.service';
import { Fund } from '../fund/fund.model';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss']
})
export class FundsComponent implements OnInit {

  funds: Fund[] = [];

  constructor(private fundService: FundService) { }

  ngOnInit(): void {
    this.fundService.getFunds().subscribe(funds=>{
      this.funds = funds;
    });
  }

}
