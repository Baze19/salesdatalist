import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesdatalistComponent } from 'src/app/components/salesdatalist/salesdatalist.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule , NbButtonModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DataServiceService } from './service/dataService/data-service.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import { FormsModule } from '@angular/forms';
import { SpinalService } from './service/spinal.service';
import { ChartsModule } from 'ng2-charts';

import { PiechartComponent } from './components/piechart/piechart.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TableComponent } from './components/table/table.component';
import { HomeComponent } from './components/home/home.component'




@NgModule({
  declarations: [
    AppComponent,
    SalesdatalistComponent,
   
    PiechartComponent,
    PagenotfoundComponent,
    TableComponent,
    HomeComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    HttpClientModule,
    ChartsModule,
    FormsModule,
    NgxSpinnerModule,
    NbButtonModule

  ],
  
  providers: [DataServiceService, SpinalService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
