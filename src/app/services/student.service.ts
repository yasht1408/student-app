
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { Student } from "../student.model";
import { DataStorageService } from './datastorage.service';


export class StudentService{

    editRecord = new Subject<number>();
    recordsChanged = new Subject<Student[]>();
  
     private records: Student[] = [
        new Student('Yash Trikha',23,'A'),
        new Student('Nikhil Singh',24,'A'),
        new Student('Reeta singh',23,'B'),
        new Student('Golu Gupta',23,'C')
    ];
    //private records: Student[] = [];
    constructor() {}

    getRecords(){
        return this.records.slice();
    }
    getRecord(index: number){
        return this.records[index];
    }
    setRecords(records: Student[]){
        this.records = records;
        this.recordsChanged.next(this.records.slice());
    }
    addRecord(record: Student){
        this.records.push(record);
        this.recordsChanged.next(this.records.slice());
    }
    updateRecord(index: number,record: Student){
        this.records[index]= record;
        this.recordsChanged.next(this.records.slice());
    }
    deleteRecord(index: number){
        this.records.splice(index,1);
        this.recordsChanged.next(this.records.slice());
    }
}