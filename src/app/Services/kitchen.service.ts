import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Kitchen } from '../Models/kitchen.model';


@Injectable({
  providedIn: 'root'
})
export class KitchenService {
  database: AngularFireDatabase
  kitchenref: AngularFireList<Kitchen>
  constructor(db: AngularFireDatabase) {
    this.kitchenref = db.list('/StaffCredentials/Kitchen')
    
   }
   kitchendataimporter(){
     
    return this.kitchenref
   }
}
