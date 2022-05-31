import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { catchError, throwError } from 'rxjs';
import { IUser } from './user-form/user-form.component';
import { of } from 'rxjs';

export interface IComment{
  id: number,
  pollId: number,
  comment: string,
  dateOfCreation: Date
}
@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http:HttpClient) { }
  readonly ratingUrl = 'http://localhost:8080/api/rating/';
  readonly commentUrl = 'http://localhost:8080/api/comment';

  addRating(grade:number,pollId:number,comment:string,user:any){ 
    this.addComment(pollId,comment).subscribe();
    return this.http.post(this.ratingUrl,
      {
        "grade": grade,
        "pollId": pollId,
        "user": user
      });
  }

  getLastNComments(pollId:number,n:number):Observable<IComment[]>{
    return this.http.get<IComment[]>(this.commentUrl+"/last/"+pollId+"/"+n);
  }

  addComment(pollId:number,comment:string){
    return this.http.post(this.commentUrl,
      {
        "comment": comment,
        "pollId": pollId
      })
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

  public getAvgRating(pollId:number):Observable<number>{
    return this.http.get<number>(this.ratingUrl+"avg/"+pollId)
  }

  public getRatingsByPollId(pollId:number):Observable<any>{
    return this.http.get<any>(this.ratingUrl+pollId)
  }

}
