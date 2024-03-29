import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  url='https://cloud-parking-api-springboot.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  getBills():Observable<any>
{
  return this.http.get<Bill>(this.url+'/bill/getAllBills');
}

saveBill(bill: Bill, id:string):Observable<any>
{
  return this.http.post(this.url+'/bill/insertBill/' +id, bill);
}
}

export interface Bill{
    idbill: string;
    client: string;
    vehicle: string;
    daterem: string,
    parking: string;
    parkingslot: string;
    totalcost: string;
    facturator: string;
}
