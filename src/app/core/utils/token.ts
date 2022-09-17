import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class TokenUtils {

    decodeToken(token: string): any | null{
        try {
            const tokenData = jwt_decode(token);
            const json_data = JSON.stringify(tokenData)
            return JSON.parse(json_data)
          } catch(Error) {
            return null;
          }
    }
}