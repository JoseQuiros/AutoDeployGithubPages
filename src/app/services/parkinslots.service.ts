import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parking } from './parking.service';

@Injectable({
  providedIn: 'root'
})
export class ParkinslotsService {

  
  invocation = new XMLHttpRequest();
  url='https://cloud-parking-api-springboot.herokuapp.com/api';
  constructor(private http: HttpClient) { }


  GetParkingSlotByParking(_idParking: number):Observable<any>
  {
    return this.http.get<ParkingSlot>(this.url+'/parkingslot/getSlotsbyParking/'+_idParking);
  }

  saveReservation(reserv: Reserv):Observable<any>
  {
    return this.http.post(this.url+'/reservation/saveReservation', reserv);
  }
}
export interface ParkingSlot{
  idparkingslot:string;
  parking: Parking;
  idtypevehicle:string;
  number:string;
  preferentialslot:string;
  state:string;
}

export interface Reserv{
    idparking:string,
    idtime:string, 
    slotnumber:string,
    idclient: string,
    initdate: string,
    canttime: string
  };