import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { GetUserComponent } from './get-user/get-user.component';
import { CitiesModule } from './cities/cities.module';
import {CitiesComponent } from './cities/cities.component';

import { PostPrefixPipe } from './post-list/post-prefix.pipe' ;
import { LoggerInterceptor } from './logger.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailComponent,
    PageNotFoundComponent,
    TaskUpdateComponent,
    GetUserComponent,
    PostPrefixPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CitiesModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru'},
    {provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
