import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { IPoll } from '../home/home.component';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http:HttpClient,private router:Router) { }
  readonly pollUrl = 'http://localhost:8080/api/poll/';

  public getPollById(id:number):Observable<IPoll> {
    return this.http.get<IPoll>(this.pollUrl + id).pipe(
      catchError(this.handleError));
  }

  public getRecentPolls(amount:number):Observable<IPoll[]> {
    return this.http.get<IPoll[]>(this.pollUrl + "last/" + amount).pipe(
      catchError(this.handleError));
  } 
  public getPollsList():Observable<IPoll[]> { /*add limit parameter*/
    return this.http.get<IPoll[]>(this.pollUrl).pipe(
      catchError(this.handleError));
    }

    public handleError(err: HttpErrorResponse) {
      if(err.status === 404){
        alert("Not found");
      }
      return throwError(() => err);
  
    }
}
