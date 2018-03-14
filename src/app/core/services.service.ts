import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class ServicesService {

  constructor(private http: Http) { }

  // public getDrivers(): Observable<any>  {
  // 	return this.http.get(this.driversUrl)
  // 		.map(this.extractData)
  // 		.map(driverList => {
  //       console.log(driverList);
  //       console.log(driverList.MRData)
  // 			const drivers = driverList;
  // 			return driverList.MRData;
  // 		});
  // } 

  


  // private extractData(res: Response) {
  //   if (res.status < 200 || res.status >= 300) {
  //     throw new Error('Bad response status: ' + res.status);
  //   }
  //   const body = res.json();
  //   return body || {};
  // }

}
