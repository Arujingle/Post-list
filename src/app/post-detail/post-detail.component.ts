import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../task-type';
import {Router} from '@angular/router';
import {TaskRestService} from '../task-rest.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public title: string;
  public description: string;
  public userId: string;
  public isDone: boolean;

   public model: FormGroup;
   public taskId: string;

  constructor(
    private router: Router,
    private rest: TaskRestService,
    private acroute: ActivatedRoute
) { }


  ngOnInit() {
      this.taskId = this.acroute.snapshot.paramMap.get('id');
}

    createTask() {
      const task: Task = {
          title: this.title,
          description : this.description,
          userId: this.userId,
          isDone: this.isDone
      };

      this.rest.createTask(task)
    .subscribe(article =>
      console.log(article));
      this.router.navigate(['/tasklist']);
  }





}
