import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { catchError, throwError } from 'rxjs';
import { IUser } from './user-form/user-form.component';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http:HttpClient) { }
  readonly ratingUrl = 'http://localhost:8080/api/rating/';

  addRating(grade:number,pollId:number,comment:string,user:any){ 
    return this.http.post(this.ratingUrl,
      {
        "grade": grade,
        "pollId": pollId,
        "comment": comment,
        "user": user
      });
  }

  status: boolean = false;
  checkIfUserAlreadyVoted(pollId:number,userid:number):any{
    return this.http.get(this.ratingUrl+pollId+"/"+userid).pipe(
      catchError(error => {
        return this.handleError(error, () => this.checkIfUserAlreadyVoted(pollId,userid));
      }));
  }
  async test(pollId:number,userid:number){
    var response = await this.checkIfUserAlreadyVoted(pollId,userid).toPromise();
    return response;
  }
  async proceed(pollId:number,userid:number){
    var idk = await this.test(pollId,userid);
    if(idk === true) return true;
    return false
  }

  public handleError(error: { status: number; }, continuation: () => Observable<any>) {
    if(error.status === 404 || error.status === 400){
      return of(false);
    }
    return of(true);
  }

}
