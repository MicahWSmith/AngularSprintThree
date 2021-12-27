import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FundService } from '../fund.service';
import { Fund } from './fund.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss']
})
export class FundComponent implements OnInit {

  @Input() fund: Fund = {};

  constructor(private router: Router, private route: ActivatedRoute, private fundService: FundService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.fundService.getFund(params['id']).subscribe(fund=>{
        this.fund = fund;
      });
    });
  }

  deleteFund(): void{
    console.log("DELETE:",this.fund);
    this.fundService.deleteFund(this.fund.id).subscribe(delFund =>{
      this.router.navigateByUrl(`/funds`);
    });
  }

  editFund(): void{
    this.fundService.updateFund(this.fund).subscribe(upFund =>{
      this.router.navigateByUrl(`/funds`);
    });
  }

}
