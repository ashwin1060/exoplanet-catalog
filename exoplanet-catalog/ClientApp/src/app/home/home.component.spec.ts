import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppModule } from '../app.module';
import { MockPlanetConfigService } from '../Mock/mock-planet-config.service';
import { PlanetConfigService } from '../Services/planet-config.service';
import { HomeComponent } from './home.component';

class UtilityFunctions {
  private _fixture: ComponentFixture<HomeComponent>;

  constructor(private fixt: ComponentFixture<HomeComponent>) {
    this._fixture = fixt;
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let utilityClass = new UtilityFunctions(fixture);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, MatSelectModule,FormsModule, ReactiveFormsModule, NoopAnimationsModule, HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule],
      declarations: [HomeComponent],
      providers: [

        { provide: PlanetConfigService, useClass: MockPlanetConfigService },
        { provide: ActivatedRoute, useValue: {parent: '/test'}},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have some data to display on load', ()=>{
    expect(component.planetConfigurations.length).toBeGreaterThan(0);
  });

});
