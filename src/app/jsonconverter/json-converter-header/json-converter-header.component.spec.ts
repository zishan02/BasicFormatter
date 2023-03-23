import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonConverterHeaderComponent } from './json-converter-header.component';

describe('JsonConverterHeaderComponent', () => {
  let component: JsonConverterHeaderComponent;
  let fixture: ComponentFixture<JsonConverterHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonConverterHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonConverterHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
