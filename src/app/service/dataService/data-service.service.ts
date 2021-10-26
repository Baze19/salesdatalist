import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { url } from 'inspector';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
   body = {

    "angular_test": "angular-developer"   
  }
  url = 'https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub?_limit=12'
   
  constructor(private http : HttpClient) { }
  postData() :Observable <any>{
    return this.http.post(this.url,this.body,{responseType:'json'})
  }

}
