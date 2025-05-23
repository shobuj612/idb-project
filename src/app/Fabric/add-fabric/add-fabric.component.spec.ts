import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFabricComponent } from './add-fabric.component';

describe('AddFabricComponent', () => {
  let component: AddFabricComponent;
  let fixture: ComponentFixture<AddFabricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFabricComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFabricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
