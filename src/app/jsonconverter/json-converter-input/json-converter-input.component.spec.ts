import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonConverterInputComponent } from './json-converter-input.component';

describe('JsonConverterInputComponent', () => {
  let component: JsonConverterInputComponent;
  let fixture: ComponentFixture<JsonConverterInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonConverterInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonConverterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
