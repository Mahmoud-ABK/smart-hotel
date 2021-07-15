import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Kitchen } from '../Models/kitchen.model';


@Injectable({
  providedIn: 'root'
})
export class KitchenService {
  database: AngularFireDatabase
  kitchenref: AngularFireList<Kitchen>
  servantref:AngularFireList<Kitchen>
  managerref:AngularFireList<Kitchen>
  constructor(db: AngularFireDatabase) {
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
}
