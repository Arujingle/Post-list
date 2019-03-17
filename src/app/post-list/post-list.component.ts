import { Component, OnInit } from '@angular/core';
import { Task } from '../task-type';
import { Router } from '@angular/router';
import { TaskRestService } from '../task-rest.service';
import { TaskDataService} from '../task-data.service';
import { pipe } from '@angular/core/src/render3';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
    tasks: Task[];
    public filter;
  constructor(
    private router: Router,
    private dataservice: TaskDataService,
    private taskrest: TaskRestService) { }





  ngOnInit() {
     this.taskrest.getTasks()
    .subscribe(data => this.tasks = data);
  }
  createTask(task: Task) {
    this.taskrest.createTask(task)
    .subscribe(article =>
      console.log(article));

  }
  deleteTask(id) {
    this.taskrest.deleteTask(id)
    .subscribe(res => {
      if (res) {
        const newTasks = this.tasks.filter((task) => task.id === id);
        this.tasks = newTasks;
      }
    });
  }
  filterTask(id) {
    this.taskrest.filterTask(id)
    .subscribe(res => {
      console.log(res);
    });

  }



}
