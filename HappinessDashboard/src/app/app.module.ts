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


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    HeaderComponent
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
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
