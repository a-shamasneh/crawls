import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GetTendersService {

  constructor(private http:Http) { }
  GetTenders(){
  	 return this.http.get('/tenders').map(res=>res.json())
  }

}
