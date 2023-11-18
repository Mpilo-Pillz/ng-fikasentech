import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderCardComponent } from './page-header-card.component';

describe('PageHeaderCardComponent', () => {
  let component: PageHeaderCardComponent;
  let fixture: ComponentFixture<PageHeaderCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageHeaderCardComponent]
    });
    fixture = TestBed.createComponent(PageHeaderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
