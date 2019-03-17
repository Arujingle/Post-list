import { Injectable } from '@angular/core';
import { Task } from './task-type';
import {TaskRestService} from './task-rest.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  constructor(
    private taskrest: TaskRestService,
    private http: HttpClient) {
     }

     getTasks() {
     return this.taskrest.getTasks();
     }





}
