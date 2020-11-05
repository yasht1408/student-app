import { Injectable } from '@angular/core';
import{ HttpClient, HttpParams } from '@angular/common/http';
import { map,tap } from 'rxjs/operators';

import { StudentService } from './student.service';
import { Student } from '../student.model';

@Injectable()
export class DataStorageService{

    constructor(private studentService: StudentService,
                private http: HttpClient) {}
        
    storeRecords(){
        const records = this.studentService.getRecords();
        this.http.put('https://student-management-85734.firebaseio.com/records.json',records)
              .subscribe(response=>{
                  console.log(response);
              });
    } 
    fetchRecords(){
        return this.http.get<Student[]>('https://student-management-85734.firebaseio.com/records.json')
        .subscribe(records=>{
            this.studentService.setRecords(records);
            console.log(records);
        });
        
    
    }
}