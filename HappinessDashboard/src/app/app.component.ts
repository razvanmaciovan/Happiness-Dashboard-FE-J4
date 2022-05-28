import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <input [(ngModel)]="username" #ctrl="ngModel" required>

    <p>Value: {{ username }}</p>
    <p>Valid: {{ ctrl.valid }}</p>

    <button (click)="setValue()">Set value</button>
  `,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'HappinessDashboard';
}
