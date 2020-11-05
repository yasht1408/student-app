import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddRecordsComponent } from './records/add-records/add-records.component';
import { ShowRecordsComponent } from './records/show-records/show-records.component'
import { DataStorageService } from './services/datastorage.service';
import { StudentService } from './services/student.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
//import { RecordResolverService } from './services/resolver.service';


@NgModule({
  declarations: [
    AppComponent,
    AddRecordsComponent,
    ShowRecordsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [DataStorageService,StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
