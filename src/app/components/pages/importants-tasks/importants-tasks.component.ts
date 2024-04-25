import { Component, inject } from '@angular/core';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-importants-tasks',
  standalone: true,
  imports: [PageTitleComponent, TaskListComponent],
  templateUrl: './importants-tasks.component.html',
  styleUrl: './importants-tasks.component.scss',
})
export class ImportantsTasksComponent {
  newTask = '';
  taskList: any[] = [];
  httpService = inject(HttpService);
  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.httpService.getAllTasks().subscribe((result: any) => {
      this.taskList = result.filter((x: any) => x.important == true);
    });
  }

  onComplete(task: any) {
    task.completed = true;
    console.log('complete', task);
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
}
