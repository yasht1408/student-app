import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Student } from '../student.model';
import { DataStorageService } from './datastorage.service';
import { StudentService } from './student.service';


export class RecordResolverService implements Resolve<Student[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private studentService: StudentService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const records = this.studentService.getRecords();

    if (records.length === 0) {
      return this.dataStorageService.fetchRecords();
    } else {
      return records;
    }
  }
}