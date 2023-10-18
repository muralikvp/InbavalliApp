import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { ListingComponent } from './listing/listing.component';
import { RouterModule } from '@angular/router';
import { AddNewComponent } from './add-new/add-new.component';
import { TodoComponent } from './todo/todo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CustomerComponent,
    ListingComponent,
    AddNewComponent,
    TodoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,HttpClientModule, AppRoutingModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
