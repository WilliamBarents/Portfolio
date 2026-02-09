import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZyneeraComponent } from './zyneera.component';

describe('ZyneeraComponent', () => {
  let component: ZyneeraComponent;
  let fixture: ComponentFixture<ZyneeraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZyneeraComponent]
    });
    fixture = TestBed.createComponent(ZyneeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
