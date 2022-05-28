import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

export interface ITopic {
    id: number;
    name: string;
}

@Injectable({
    providedIn: 'root'
})
export class TopicService {

    constructor(private http: HttpClient, private router: Router) { }
    readonly topicUrl = 'http://localhost:8080/api/topic/';

    public getTopicById(id: number): Observable<ITopic> {
        return this.http.get<ITopic>(this.topicUrl + id).pipe(
            catchError(this.handleError));
    }

    public getRecentPolls(amount: number): Observable<ITopic[]> {
        return this.http.get<ITopic[]>(this.topicUrl + "last/" + amount).pipe(
            catchError(this.handleError));
    }

    public getTopicList(): Observable<ITopic[]> { /*add limit parameter*/
        return this.http.get<ITopic[]>(this.topicUrl).pipe(
            catchError(this.handleError));
    }

    public handleError(err: HttpErrorResponse) {
        console.log("Not found");
        return throwError(() => err);
    }

}
