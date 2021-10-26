import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/dataService/data-service.service';
import { SpinalService } from 'src/app/service/spinal.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salesdatalist',
  templateUrl: './salesdatalist.component.html',
  styleUrls: ['./salesdatalist.component.scss']
})
export class SalesdatalistComponent implements OnInit {

  listingsales = [];
  Region: string = ''
  request:boolean = false;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [50, 50, 50, 50, 50, 50, 50], label: 'profit' },
    { data: [50, 50, 50, 50, 50, 50, 50], label: 'sales' }
  ];



  constructor(private DataServiceService: DataServiceService,
              private  SpinalService:  SpinalService , 
               private router:Router) { }

  ngOnInit() {
    this.getData();


  }

   chartClicked = (event: any) => {
    console.log(event)
   }
   chartHovered = (event: any) => {
     console.log(event?.target)
    }

    // method for fetching sales data
  getData = async () => {
  
      this.SpinalService.showSpinner();
      const data = await this.DataServiceService.postData().toPromise();
      this.SpinalService.hideSpinner();
      this.listingsales = data.slice(0,40)
      this.barChartData[0].data = this.listingsales.map((product) => Number(product["Profit"]));
      this.barChartLabels = this.listingsales.map((product) => product['Product Name']);
      this.barChartData[1].data = this.listingsales.map((product) => Number(product["Sales"]));
     console.table('listing',this.listingsales);
  

  }


  getbyRegion = () => {
  
    if(this.Region ){
      this.barChartData[1].data = this.listingsales.filter((product)=>product['Order ID'] ==this.Region.toString()).map(product=>Number(product["Profit"]));
      this.barChartData[0].data=this.listingsales.filter((product)=>product['Order ID'] ==this.Region.toString()).map(product=>Number(product["Sales"]));
      this.barChartLabels = this.listingsales.filter((product)=>product['Order ID'] ==this.Region.toString()).map(product=>(product["Product Name"]));
    }else{
      this.barChartData[0].data = this.listingsales.map((product) => Number(product["Profit"]));
      this.barChartLabels = this.listingsales.map((product) => product['Product Name']);
      this.barChartData[1].data = this.listingsales.map((product) => Number(product["Sales"]));
    }
  }


  goHome(){
    this.router.navigate(['home'])
  }
}

