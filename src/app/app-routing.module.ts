import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRecordsComponent } from './records/add-records/add-records.component';
import { ShowRecordsComponent } from './records/show-records/show-records.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/addrecord', pathMatch: 'full' },
  { path: 'addrecord', component: AddRecordsComponent},//resolve: [RecordResolverService]
  { path: 'showrecord', component: ShowRecordsComponent}, //resolve: [RecordResolverService]

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
