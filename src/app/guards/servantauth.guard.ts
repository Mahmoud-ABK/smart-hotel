import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { KitchenService } from '../Services/kitchen.service';

@Injectable({
  providedIn: 'root'
})
export class ServantauthGuard implements CanActivate {
  constructor(
    private router: Router, public servantdata:KitchenService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.servantdata.servantaccess){
        return true
      }else{
        this.router.navigate(['/servantlogin'])
        return false
      }
  }
  
}
