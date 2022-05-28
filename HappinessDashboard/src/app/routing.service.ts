import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { UserService } from './user-form/user.service';

export interface ITopic {
    id: number;
    name: string;
}

@Injectable({
    providedIn: 'root'
})
export class RoutingService {

    constructor(private http: HttpClient,
        public router: Router,
        private userService: UserService) {
    }

    GoToUserForm() {
        let currentUser = this.userService.getToken();

        if (currentUser === null) {
            if (this.router.url === '/home') window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
            else this.router.navigate(['/user-form']);
        }
        else {
            this.router.navigate(['/account']);
        }

    }

    goToPollResults(id: number) {
        this.router.navigate(['/poll/results/', id]);
    }

    isLoggedIn() {
        let currentUser = this.userService.getToken();
        if (currentUser === null) return false
        return true
    }

    GoToErrorPage() {
        this.router.navigate(['/error']);
    }

}
