import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonConverterMidgridComponent } from './json-converter-midgrid.component';

describe('JsonConverterMidgridComponent', () => {
  let component: JsonConverterMidgridComponent;
  let fixture: ComponentFixture<JsonConverterMidgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonConverterMidgridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonConverterMidgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
