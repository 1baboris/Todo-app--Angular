import { Routes } from '@angular/router';
import { AllTaskComponent } from './components/pages/all-task/all-task.component';
import { ImportantsTasksComponent } from './components/pages/importants-tasks/importants-tasks.component';
import { CompletedTasksComponent } from './components/pages/completed-tasks/completed-tasks.component';

export const routes: Routes = [
  {
    path: '',
    component: AllTaskComponent,
    title: 'All tasks - Todo App',
  },
  {
    path: 'importants',
    component: ImportantsTasksComponent,
    title: 'Importants tasks - Todo App',
  },
  {
    path: 'completed',
    component: CompletedTasksComponent,
    title: 'Completed Tasks - Todo App',
  },
];
