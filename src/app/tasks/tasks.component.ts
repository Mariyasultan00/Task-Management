import { Component ,Input } from '@angular/core';

import { TaskService } from './task/tasks.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingTask = false;
 
constructor(private tasksService: TaskService){}

get selectedUserTasks(){
  return this.tasksService.getUserTasks(this.userId);
}
onCompleteTask(id:string){
  
}
onStartAddTask(){
  this.isAddingTask=true;
}
onCloseAddTask(){
  this.isAddingTask=false;
}
}
