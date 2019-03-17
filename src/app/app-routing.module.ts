import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {TaskUpdateComponent } from './task-update/task-update.component';
import { GetUserComponent } from './get-user/get-user.component';
const routes: Routes = [
  { path: 'tasklist', component: PostListComponent},
  { path: 'detail', component: PostDetailComponent},
  { path: 'update/:id', component: TaskUpdateComponent},
  { path : 'info/:id', component: GetUserComponent},
  { path: '**', component: PageNotFoundComponent},
  { path: '', redirectTo: '/tasklist', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
