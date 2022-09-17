import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AuthEndpoints } from "../constants/enpoints";
import { Observable } from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
  })
export class AuthService {

    constructor(private http: HttpClient, public jwtHelper: JwtHelperService){}

    getTokensWithCode(code: string): Observable<any>{
        return this.http.post<any>(
            AuthEndpoints.exchange_code,
            {
                code: code 
            }
        )
    }

    login(email: string, password: string): Observable<any> {
        return this.http.post<any>(
            AuthEndpoints.login,
            {
                email: email,
                password: password
            }
        )
    }

    signup(email: string, password: string, name: string, lastName: string){
        return this.http.post<any>(
            AuthEndpoints.signup,
            {
                email: email,
                password: password,
                name: name,
                lastName: lastName 
            }
        )
    }

    confirmAccount(code: string, email: string){
        return this.http.post<any>(
            AuthEndpoints.confirm,
            {
                code: code,
                email: email
            }
        )
    }

    isAuthenticated(): boolean {
        const token = localStorage.getItem('access_token');
        if(token != null){
            return !this.jwtHelper.isTokenExpired(token);
        }
        return false;
    }

}