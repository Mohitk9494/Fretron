import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import {AuthserviceService} from './authservice.service'
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  user:User

  constructor(private _router:Router, private authservice:AuthserviceService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('_token')){
        // localStorage
        return true;
    }else{
    this._router.navigate(['auth'],{ queryParams: { returnUrl: state.url }});
      
    }
      
  }
  
}
