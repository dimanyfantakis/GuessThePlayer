import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersResultComponent } from './players-result.component';

describe('PlayersResultComponent', () => {
  let component: PlayersResultComponent;
  let fixture: ComponentFixture<PlayersResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
