import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonconverterMainComponent } from './jsonconverter-main.component';

describe('JsonconverterMainComponent', () => {
  let component: JsonconverterMainComponent;
  let fixture: ComponentFixture<JsonconverterMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonconverterMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonconverterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
