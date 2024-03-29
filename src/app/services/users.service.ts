import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  invocation = new XMLHttpRequest();
  url='https://cloud-parking-api-springboot.herokuapp.com/api';
  constructor(private http: HttpClient) { }

  

  getUsers():Observable<any>
  {
    return this.http.get<Users>(this.url+'/user/getAllUsers');
  }

  getUsersById(id: string):Observable<any>
  {
    return this.http.get(this.url+'/user/getUser/'+id);
  }
  getUsersByEmail(email: string):Observable<any>
  {
    return this.http.get(this.url+'/user/login/'+ email);
  }
  saveUser(users: Users):Observable<any>
  {
    return this.http.post(this.url+'/user/saveUser', users);
  }

  editUser(users: Users):Observable<any>
  {
    return this.http.post(this.url+'/user/updateUser', users);
  }

  deleteUser(id:string):Observable<any>
  {
    return this.http.delete(this.url+'/user/delete/'+id);
  }

  getRols():Observable<any>
  {
    return this.http.get<Rol>(this.url+'/rol/getAllRoles');
  }
}


export interface Users{
  iduser:string;
  idrol:string;
  name:string;
  dni:string;
  age:string;
  telephone:string;
  email:string;
  clave:string;
  state:string;
}

export interface Rol{
  
  idrol:string;
  name:string;
  authority:string;
}