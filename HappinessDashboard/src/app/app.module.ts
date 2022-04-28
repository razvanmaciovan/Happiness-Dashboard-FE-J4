import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import {SplitterModule} from 'primeng/splitter';
import {DividerModule} from 'primeng/divider';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { UserFormComponent } from './user-form/user-form.component';
import { HeaderComponent } from './header/header.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenubarModule} from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './user-form/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupFormComponent } from './SignUp-Form/signup-form.component';
import { PasswordModule } from "primeng/password";

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    SignupFormComponent,
    HeaderComponent,
    LoginComponent
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
    PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
