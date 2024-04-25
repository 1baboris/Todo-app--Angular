import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantsTasksComponent } from './importants-tasks.component';

describe('ImportantsTasksComponent', () => {
  let component: ImportantsTasksComponent;
  let fixture: ComponentFixture<ImportantsTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportantsTasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImportantsTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
