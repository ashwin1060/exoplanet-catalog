import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PlanetConfigService } from './planet-config.service';
import { PlanetConfiguration } from '../Models/PlanetConfiguration';


describe('PlanetConfigService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [PlanetConfigService]
        });
    });

    it('should be created', inject([PlanetConfigService], (service: PlanetConfigService) => {
        expect(service).toBeTruthy();
    }));

    let fakeConfigs: Array<PlanetConfiguration> = [
{
      planetIdentifier: "Kepler-819 b",
      "typeFlag": 0,
      "planetaryMassJpt": 0.2,
      "radiusJpt": 0.246,
      "periodDays": 33.1995648,
      "semiMajorAxisAU": 1.2,
      "eccentricity": "",
      "periastronDeg": "",
      "longitudeDeg": "",
      "ascendingNodeDeg": "",
      "inclinationDeg": 0,
      "surfaceTempK": "",
      "ageGyr": "",
      "discoveryMethod": "transit",
      "discoveryYear": 2016,
      "lastUpdated": "16/05/10",
      "rightAscension": "19 41 29",
      "declination": "+39 10 38",
      "distFromSunParsec": "",
      "hostStarMassSlrMass": 0.86,
      "hostStarRadiusSlrRad": 0.81,
      "hostStarMetallicity": -0.06,
      "hostStarTempK": 5279,
      "hostStarAgeGyr": ""
  },
  {
    "planetIdentifier": "Kepler-554 b",
    "typeFlag": 0,
    "planetaryMassJpt": 0,
    "radiusJpt": 0.383,
    "periodDays": 1.90220856,
    "semiMajorAxisAU": 0,
    "eccentricity": "",
    "periastronDeg": "",
    "longitudeDeg": "",
    "ascendingNodeDeg": "",
    "inclinationDeg": 0,
    "surfaceTempK": "",
    "ageGyr": "",
    "discoveryMethod": "transit",
    "discoveryYear": 2016,
    "lastUpdated": "16/05/10",
    "rightAscension": "19 45 38",
    "declination": "+51 21 29",
    "distFromSunParsec": "",
    "hostStarMassSlrMass": 0.93,
    "hostStarRadiusSlrRad": 0.92,
    "hostStarMetallicity": 0.14,
    "hostStarTempK": 5447,
    "hostStarAgeGyr": ""
  }]

  it('should call the correct endpoint and return the correct data when getPlanetConfig is called',
        inject([HttpTestingController, PlanetConfigService],
            async (httpMock: HttpTestingController, service: PlanetConfigService) => {

                const fakeResponse: Array<PlanetConfiguration> = fakeConfigs;
                service.getPlanetConfig().subscribe((data: Array<PlanetConfiguration>) => {
                  expect(data).toEqual(fakeResponse);
                });
                const req = httpMock.expectOne('https://localhost:5001/api/records');
                expect(req.request.method).toEqual('GET');
                req.flush(fakeResponse);
            }));
  });
