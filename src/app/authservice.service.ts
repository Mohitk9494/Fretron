import { Injectable } from '@angular/core';
import {User} from '../app/user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {


  constructor(private httpclient:HttpClient) { }
  
  
  login(user:User):Observable<any>{
    let header = new HttpHeaders()
    header.append('Content-Type','application/json');
    
return this.httpclient.post('https://apis.fretron.com/users/v1/user/login?isDebugMode=false',user,{headers:header});
  }
}
