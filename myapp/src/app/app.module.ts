import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {AccordionModule} from 'primeng/accordion'; 
import {TableModule} from 'primeng/table';
import { NotFoundComponent } from './not-found/not-found.component';
import {HttpClientModule} from '@angular/common/http'
import { UsersComponent } from './users/users.component';
import { UsermailComponent } from './usermail/usermail.component';
import { TempletFormComponent } from './templet-form/templet-form.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ContactComponent,
    AboutComponent,
    NotFoundComponent,
    UsersComponent,
    UsermailComponent,
    TempletFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    AccordionModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
