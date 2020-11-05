import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DataStorageService } from 'src/app/services/datastorage.service';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/student.model';

@Component({
  selector: 'app-add-records',
  templateUrl: './add-records.component.html',
  styleUrls: ['./add-records.component.css']
})
export class AddRecordsComponent implements OnInit {

  
  constructor(private dataStorageService: DataStorageService,
              private studentService: StudentService,
              private router: Router) { }

  ngOnInit() {
  }
 
  onSubmit(form: NgForm){
    if(form.valid){
       console.log(form);
      const record: Student = {
        name: form.value.name,
        age: form.value.age,
        grade: form.value.grade
      };
      this.studentService.addRecord(record);
      alert('Data added successfully');
      form.reset();
      this.dataStorageService.storeRecords();

    }else{
      alert('Please enter all the mandatorty fields');
    }
  }
  onShow(){
    //this.studentService.showRec.next()
    this.router.navigate(['/showrecord']);
  }

}
