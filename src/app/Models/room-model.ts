export class RoomModel {
    roomid:number;
    RoomCheckinDate :string[] ;
    RoomCheckoutDate:string[] ;
    RoomPrice:number;
    RoomTemperature: number ;
    Roomhumidity:number;
    RoomLighting:[string,string,string,string];
    WaterTemperature:number;
    Gas:boolean;
    Fire:boolean ;
    guestHistoryID:string[];
    doorOpen:boolean;
    doorHistory:any[]
    doorHistoryArchive:any[]



}
