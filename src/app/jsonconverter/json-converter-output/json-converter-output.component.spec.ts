import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonConverterOutputComponent } from './json-converter-output.component';

describe('JsonConverterOutputComponent', () => {
  let component: JsonConverterOutputComponent;
  let fixture: ComponentFixture<JsonConverterOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonConverterOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonConverterOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
