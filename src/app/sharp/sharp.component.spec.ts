import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharpComponent } from './sharp.component';

describe('SharpComponent', () => {
  let component: SharpComponent;
  let fixture: ComponentFixture<SharpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
