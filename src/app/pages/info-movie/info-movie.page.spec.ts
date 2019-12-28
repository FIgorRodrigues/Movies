import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoMoviePage } from './info-movie.page';

describe('InfoMoviePage', () => {
  let component: InfoMoviePage;
  let fixture: ComponentFixture<InfoMoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoMoviePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
