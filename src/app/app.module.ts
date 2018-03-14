import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule } from '@angular/material';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { MainPageComponent } from './main-page/main-page.component';
import { StoreModule } from '@ngrx/store';
import { NavbarComponent } from './navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';

import { TasksModule } from './tasks';

export const firebaseConfig = {
  apiKey: 'AIzaSyBmIELyPg02ghmmEcXzCfp1dUPg-vkdxgs',
  authDomain: 'vitor-assist.firebaseapp.com',
  databaseURL: 'https://vitor-assist.firebaseio.com',
  projectId: 'vitor-assist',
  storageBucket: 'vitor-assist.appspot.com',
  messagingSenderId: '327969448244'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    MainPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    CoreModule,
    HttpModule,
    MdCardModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    TasksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
