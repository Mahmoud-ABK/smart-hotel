import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { KitchenService } from '../Services/kitchen.service';

@Injectable({
  providedIn: 'root'
})
export class KitchenauthGuard implements CanActivate {
  constructor(
    private router: Router, public kitchendata:KitchenService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.kitchendata.kitchenaccess){
        return true
      }else{
        this.router.navigate(['/kitchenlogin'])
        return false
      }
    
  }
  
}
