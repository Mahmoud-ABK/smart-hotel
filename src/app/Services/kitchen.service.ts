import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Kitchen } from '../Models/kitchen.model';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { LoginManagerComponent } from '../login-pages/login-manager/login-manager.component';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class KitchenService {
  database: AngularFireDatabase
  kitchenref: AngularFireList<Kitchen>
  servantref:AngularFireList<Kitchen>
  managerref:AngularFireList<Kitchen>
  manageraccess:boolean
  kitchenaccess:boolean
  servantaccess:boolean
  constructor(db: AngularFireDatabase, private router: Router
    ) {
    this.manageraccess=localStorage.getItem('manAccess')=='true'
    this.kitchenref = db.list('/StaffCredentials/kitchen')
    this.servantref = db.list('/StaffCredentials/servant')
    this.managerref = db.list('/StaffCredentials/manager')
   }
   kitchendataimporter(){
    return this.kitchenref
   }
   servantdataimporter(){
    return this.servantref
   }
   managerdataimporter(){
    return this.managerref
   }
  managerdataretriever(param:boolean){
   this.manageraccess=param
   localStorage.setItem('manAccess',String(param))
 }
 kitchendataretriever(param:boolean){
  this.kitchenaccess=param
}
servantdataretriever(param:boolean){
  this.servantaccess=param
}

}
