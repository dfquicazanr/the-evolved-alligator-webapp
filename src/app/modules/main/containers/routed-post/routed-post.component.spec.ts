import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutedPostComponent } from './routed-post.component';

describe('RoutedPostComponent', () => {
  let component: RoutedPostComponent;
  let fixture: ComponentFixture<RoutedPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutedPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
