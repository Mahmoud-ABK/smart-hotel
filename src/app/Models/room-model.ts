export class RoomModel {
    roomid:number;
    RoomCheckinDate :string[] ;
    RoomCheckoutDate:string[] ;
    RoomPrice:number;
    RoomTemperature: number ;
    Roomhumidity:number;
    RoomLighting:[Boolean,Boolean,Boolean,Boolean];
    WaterTemperature:number;
    Gas:boolean;
    Fire:boolean ;
    guestHistoryID:string[];
    doorOpen:boolean;
    doorHistory:any[]
    doorHistoryArchive:any[]



}
