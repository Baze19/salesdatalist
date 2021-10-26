import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesdatalistComponent } from 'src/app/components/salesdatalist/salesdatalist.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component'
import { PiechartComponent } from './components/piechart/piechart.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { TableComponent } from './components/table/table.component'
import { HomeComponent } from './components/home/home.component'

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "bar", component: SalesdatalistComponent },
  { path: "pie", component: PiechartComponent},
  { path: "table", component: TableComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: '**', component: PagenotfoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
