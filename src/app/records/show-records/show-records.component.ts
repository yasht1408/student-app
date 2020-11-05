import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/services/datastorage.service';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/student.model';

@Component({
  selector: 'app-show-records',
  templateUrl: './show-records.component.html',
  styleUrls: ['./show-records.component.css']
})
export class ShowRecordsComponent implements OnInit,OnDestroy {
  records: Student[] = [];
  record: Student;
  id: number;
  subscription : Subscription;
  constructor(private dataStorageService: DataStorageService,
              private studentService: StudentService,
              private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit() {
     //this.onFetchData();
     this.records = this.studentService.getRecords();
     this.subscription = this.studentService.recordsChanged.subscribe((records: Student[])=>{
       this.records = records;
     })
  }


  onFetchData(){
    this.dataStorageService.fetchRecords();
  }
  onEditItem(index: number){
    console.log(index);
    this.studentService.deleteRecord(index);
    
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
  //   this.subscription = this.studentService.recordsChanged
  //     .subscribe(
  //       (record: Student[]) => {
  //         this.records = record;
  //       }
  //     );
  //   this.records = this.studentService.getRecords();
  
  //    //this.onFetchData();
  // }
  //   // this.onFetchRecords();
  //   // this.route.params.subscribe(
  //   //   (params: Params)=>{
  //   //       this.id = +params['id'];
  //   //       this.record = this.studentService.getRecord(this.id);

  //   //   }
  //   // )
  //   onFetchData(){
  //     this.dataStorageService.fetchRecords()
  //   }
    
  
 
  // onDelete(){
  //   this.studentService.deleteRecord(this.id);
  // }