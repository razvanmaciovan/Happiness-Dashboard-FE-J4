import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { IUser } from './user-form/user-form.component';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  readonly configUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getUsersList():Observable<IUser[]> {
    return this.http.get<IUser[]>(this.configUrl + "/users");
  }
  getUserByUsername(username:string) {
    return this.http.get(this.configUrl + "/users/" + username);
  }
}