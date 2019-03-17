import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task-type';
import { Observable, pipe } from 'rxjs';
import { User } from './user-type';

@Injectable({
  providedIn: 'root'
})
export class TaskRestService {

  host = 'http://expo.iict.kz/api';
  task: Task[];
  taskObject = {};

  constructor( private http: HttpClient) { }
  getTasks(): Observable <Task[]> {
    return this.http.get<Task[]>(`${this.host}/Tasks`);
  }

  createTask(task: Task): Observable <Task> {
    console.log('here ');
    return this.http.post<Task>(`${this.host}/Tasks`, task );
  }

  getTask(id: number): Observable <Task> {
    return this.http.get<Task>(`${this.host}/Tasks/${id}`);
  }
  updateTask(task: Task, id: number): Observable <Task> {
    return this.http.put<Task>(`${this.host}/Tasks/${id}`, task);
  }

  deleteTask(id: number): Observable <Task> {
    return this.http.delete <Task>(`${this.host}/Tasks/${id}`);
  }

  getUser(id: number): Observable <User> {
    return this.http.get<User>(`${this.host}/Users/${id}`);

  }

  filterTask(id: number): Observable <Task> {
    const filter = {where : { userId: 'Firuza'}};
    return this.http.get<Task>(`${this.host}/Tasks`, {
      params: {
        filter: JSON.stringify(filter)
      }
    });

  }
}
