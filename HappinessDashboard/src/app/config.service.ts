import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable, pipe, tap, throwError } from 'rxjs';
import { IUser } from './user-form/user-form.component';
import { IPoll } from './home/home.component';

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

  getPollById(id:number):Observable<IPoll> {
    return this.http.get<IPoll>(this.configUrl + "/poll/" + id).pipe(
      catchError(this.handleError));
  }
  getPollsList():Observable<IPoll[]> { /*add limit parameter*/
    return this.http.get<IPoll[]>(this.configUrl + "/poll/").pipe(
      catchError(this.handleError));
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
      alert("Not found");
    }
    return throwError(() => err);

  }
}
