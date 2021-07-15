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
  constructor(db: AngularFireDatabase) {
    this.kitchenref = db.list('/staff credentials/kitchen/chef1')
    this.servantref = db.list('/staff credentials/servaant/servant1')
   }
   kitchendataimporter(){
    return this.kitchenref
   }
   servantdataimporter(){
    return this.servantref
   }
}
