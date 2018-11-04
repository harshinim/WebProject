import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ImagesComponent } from './images.component';
import { ImageService } from '../services/image.service';
import { HttpClient, HttpHandler} from '@angular/common/http';

describe('Component: Images', () => {
  let component: ImagesComponent;
  let fixture: ComponentFixture<ImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesComponent ],
      providers : [ ImageService, HttpClient , HttpHandler]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the div with class "app-container"', () => {
    const el = fixture.debugElement.query(By.css('.app-container')).nativeElement;
    expect(el).toBeDefined();
  });

});
