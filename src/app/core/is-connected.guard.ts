import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service'


@Injectable({
  providedIn: 'root'
})
export class IsConnectedGuard implements CanActivate {
  constructor(public userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.userService.login() === "admin" || this.userService.login() === "USER") {
        return true
      } else {
        return false
      }
  }

}
