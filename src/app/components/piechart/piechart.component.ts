import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Chart } from 'chart.js';
import { DataServiceService } from 'src/app/service/dataService/data-service.service';
import { SpinalService } from 'src/app/service/spinal.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {
  Category:String=''
  listingsales=[];
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType :ChartType = 'pie';
  public barChartLegend= true;
  public barChartData = [
    { data: [50, 50, 50, 50, 50, 50, 50], label: 'profit' },
    { data: [50, 50, 50, 50, 50, 50, 50], label: 'sales' }
  ];
  


  constructor( private  DataServiceService : DataServiceService,
               private router:Router,
               private  SpinalService: SpinalService) { }

  ngOnInit(): void {
    this.getData()
  }

  // get sales data
  getData = async () => {
    this.SpinalService.showSpinner()
    const data = await this.DataServiceService.postData().toPromise()
    this.listingsales = data.slice(0, 40)
    this.SpinalService.hideSpinner()
    this.barChartData[0].data = this.listingsales.map((product) => Number(product["Profit"]));
    this.barChartLabels = this.listingsales.map((product) => product['Product Name']);
    this.barChartData[1].data = this.listingsales.map((product) => Number(product["Sales"]));


  }

  getbyCategory = () => { 
    console.log('categort', this.Category)
    if(this.Category ){
      this.barChartData[1].data = this.listingsales.filter((product)=>product['Order ID'] ==this.Category.toString()).map(product=>Number(product["Profit"]));
      this.barChartData[0].data=this.listingsales.filter((product)=>product['Order ID'] ==this.Category.toString()).map(product=>Number(product["Sales"]));
      this.barChartLabels = this.listingsales.filter((product)=>product['Order ID'] ==this.Category.toString()).map(product=>(product["Product Name"]));
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
