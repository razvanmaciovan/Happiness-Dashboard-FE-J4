import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable, pipe, tap, throwError } from 'rxjs';
import { IUser } from './user-form/user-form.component';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  readonly configUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  

  registerUser(username:string , password:string){
    return this.http.post(this.configUrl + "/user/register" , { "username": username,
                                                                "password": password} );
  }

  getUsersList():Observable<IUser[]> {
    return this.http.get<IUser[]>(this.configUrl + "/user/users").pipe(
      catchError(this.handleError));
  }
  getUserByUsername(username:string) {
    return this.http.get(this.configUrl + "/user/users/" + username).pipe(
      catchError(this.handleError));
  }
  handleError(err: HttpErrorResponse){
    if(err.status === 404){
      alert("User not found");
    }
    return throwError(() => err);

  }
}
