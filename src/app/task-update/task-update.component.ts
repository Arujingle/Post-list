import { Component, OnInit } from '@angular/core';
import { TaskRestService } from '../task-rest.service';
import { Router } from '@angular/router';
import {ActivatedRoute } from '@angular/router';
import { Task } from '../task-type';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {
    public id: number;
    public title: string;
    public description: string;
    public userId: string;
    public isDone: boolean;


  constructor(
    private rest: TaskRestService,
    private route: ActivatedRoute ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.route);
    console.log(this.id);
    return this.rest.getTask(this.id)
   .subscribe(data => {
    this.title = data.title,
    this.description = data.description,
    this.userId = data.userId,
    this.isDone = data.isDone;
   });
  }
  saveTask() {
    const task: Task = {
      title: this.title,
      description : this.description,
      userId: this.userId,
      isDone: this.isDone,

  };
    this.rest.updateTask(task, this.id)
       .subscribe(res =>
       console.log(res)
      );

  }



}
