import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  readonly configUrl = 'localhost:8080/';

  constructor(private http: HttpClient) { }

}