import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonConverterSidebarComponent } from './json-converter-sidebar.component';

describe('JsonConverterSidebarComponent', () => {
  let component: JsonConverterSidebarComponent;
  let fixture: ComponentFixture<JsonConverterSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonConverterSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonConverterSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
