import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/service/dataService/data-service.service';
import { SpinalService } from 'src/app/service/spinal.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  listingsales= []
  constructor(private DataServiceService: DataServiceService,
              private router:Router,
              private Spinal:SpinalService ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData = async () => {
    this.Spinal.showSpinner()
    const data = await this.DataServiceService.postData().toPromise()
    this.Spinal.hideSpinner()
    this.listingsales = data.slice(0, 50)



  }
  goHome(){
    this.router.navigate(['home'])
  }
}
