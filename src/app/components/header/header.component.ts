import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StateService } from '../../services/state.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styles: '',
})
export class HeaderComponent {
  stateService = inject(StateService);
  searchControle = new FormControl();

  ngOnInit() {
    this.searchControle.valueChanges
      .pipe(debounceTime(250))
      .subscribe((value) => {
        this.stateService.searchSubject.next(value || '');
      });
  }
}
