import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  @Input() taskList: any[] = [];
  @Output() onImportant = new EventEmitter<any>();
  @Output() onComplete = new EventEmitter<any>();
  @Output() onUndoImportant = new EventEmitter<any>();
  @Output() onUndoComplete = new EventEmitter<any>();

  markImportant(task: any) {
    this.onImportant.emit(task);
  }

  markComplete(task: any) {
    this.onComplete.emit(task);
  }

  eraseImportant(task: any) {
    this.onUndoImportant.emit(task);
  }

  eraseComplete(task: any) {
    this.onUndoComplete.emit(task);
  }
}
