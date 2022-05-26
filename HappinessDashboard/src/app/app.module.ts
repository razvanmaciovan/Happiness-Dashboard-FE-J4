import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { SplitterModule } from 'primeng/splitter';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { UserFormComponent } from './user-form/user-form.component';
import { HeaderComponent } from './header/header.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignupComponent } from './user-form/SignUp-Form/signup.component';
import { PasswordModule } from "primeng/password";
import { CardModule } from 'primeng/card';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { PollComponent } from './poll/poll.component';
import { RatingModule } from 'primeng/rating';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { TokenInterceptorService } from './token-interceptor.service';
import { CreatePollComponent } from './poll/create-poll/create-poll.component';
import { ViewPollsComponent } from './poll/view-polls/view-polls.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import {KnobModule} from 'primeng/knob';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {DropdownModule} from 'primeng/dropdown';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    SignupComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    PollComponent,
    CreatePollComponent,
    ViewPollsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SplitterModule,
    DividerModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    TabMenuModule,
    MenubarModule,
    AppRoutingModule,
    HttpClientModule,
    PasswordModule,
    CardModule,
    MultiSelectModule,
    RatingModule,
    InputTextareaModule,
    RadioButtonModule,
    KnobModule,
    CascadeSelectModule,
    DropdownModule
  ],
  providers: [UserFormComponent, HomeComponent, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
