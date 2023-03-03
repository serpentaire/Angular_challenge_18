import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
//  role: string = "USER"
 role: string = "admin"
//  role: string = "ANONYMOUS"
  constructor() { }
  login()  {
    return this.role
  }
}
