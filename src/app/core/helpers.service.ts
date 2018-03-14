import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class HelpersService {
  userId: number;

  setUser(id: number) {
    this.userId = id;
  }

  getUser(): number {
    return this.userId;
  }
}
