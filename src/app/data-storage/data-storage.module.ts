import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageComponent } from './storage/storage.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [StorageComponent, TasksComponent, ProjectsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DataStorageModule { }
