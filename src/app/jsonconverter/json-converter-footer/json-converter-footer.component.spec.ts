import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonConverterFooterComponent } from './json-converter-footer.component';

describe('JsonConverterFooterComponent', () => {
  let component: JsonConverterFooterComponent;
  let fixture: ComponentFixture<JsonConverterFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonConverterFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonConverterFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
