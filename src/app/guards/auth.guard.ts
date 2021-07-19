import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { KitchenService } from '../Services/kitchen.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
      
  constructor(
    private router: Router, public managerdata:KitchenService
  ) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
      
     if (this.managerdata.manageraccess){
       return true
     }else{
       this.router.navigate(['/managerlogin'])
       return false
     }
   
  }
  
}
