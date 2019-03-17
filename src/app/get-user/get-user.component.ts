import { Component, OnInit } from '@angular/core';
import { User } from '../user-type';
import { TaskRestService } from '../task-rest.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {

  public UserId: string;
  public user: User;


  constructor(
    private taskrest: TaskRestService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskrest.getUser(id)
    .subscribe(res => {
      console.log(res);
    });
  }


  }


