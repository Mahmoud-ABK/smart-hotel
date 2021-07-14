export class RoomModel {
    roomid:number;
    RoomCheckinDate :string[] ;
    RoomCheckoutDate:string[] ;
    RoomPrice:number;
    RoomTemperature: number ;
    Roomhumidity:number;
    RoomLighting:[Boolean,Boolean,Boolean,Boolean];
    WaterTempertaure:number;
    Gas:boolean;
    Fire:number ;
    guestHistoryID:string[];
    doorOpen:boolean;
    doorHistory:any[]



}
