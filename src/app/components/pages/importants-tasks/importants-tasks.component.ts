import { Component, inject } from '@angular/core';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { HttpService } from '../../../services/http.service';
import { StateService } from '../../../services/state.service';

@Component({
  selector: 'app-importants-tasks',
  standalone: true,
  imports: [PageTitleComponent, TaskListComponent],
  templateUrl: './importants-tasks.component.html',
  styleUrl: './importants-tasks.component.scss',
})
export class ImportantsTasksComponent {
  newTask = '';
  intialTaskList: any[] = [];
  taskList: any[] = [];
  httpService = inject(HttpService);
  stateService = inject(StateService);
  ngOnInit() {
    this.stateService.searchSubject.subscribe((value) => {
      console.log('search', value);
      if (value) {
        this.taskList = this.intialTaskList.filter((x) =>
          x.title.toLowerCase().includes(value.toLowerCase())
        );
      } else {
        this.taskList = this.intialTaskList;
      }
    });
    this.getAllTasks();
  }

  getAllTasks() {
    this.httpService.getAllTasks().subscribe((result: any) => {
      this.intialTaskList = this.taskList = result.filter(
        (x: any) => x.important == true
      );
    });
  }

  onComplete(task: any) {
    task.completed = true;
    console.log('complete', task);
    this.httpService.updateTask(task).subscribe(() => {
      this.getAllTasks();
    });
  }

  onUndoComplete(task: any) {
    task.completed = false;
    this.httpService.updateTask(task).subscribe(() => {
      this.getAllTasks();
    });
  }

  onImportant(task: any) {
    task.important = true;
    this.httpService.updateTask(task).subscribe(() => {
      this.getAllTasks();
    });
  }

  onUndoImportant(task: any) {
    task.important = false;
    this.httpService.updateTask(task).subscribe(() => {
      this.getAllTasks();
    });
  }
}
