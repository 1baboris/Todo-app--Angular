import { Routes } from '@angular/router';
import { AllTaskComponent } from './components/pages/all-task/all-task.component';
import { ImportantsTasksComponent } from './components/pages/importants-tasks/importants-tasks.component';

export const routes: Routes = [
  {
    path: '',
    component: AllTaskComponent,
  },
  {
    path: 'importants',
    component: ImportantsTasksComponent,
  },
  {
    path: 'completed',
    component: ImportantsTasksComponent,
  },
];
