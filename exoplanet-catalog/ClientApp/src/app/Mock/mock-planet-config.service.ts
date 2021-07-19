/** ----------------------------------------------------------------------
 * (C) Copyright 2020 Cognizant TriZetto Software Group, Inc.  All rights reserved.
 * Confidential and Trade Secret Material.
 * ----------------------------------------------------------------------*/

import { Injectable } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PlanetConfiguration } from '../Models/PlanetConfiguration';



@Injectable()
export class MockPlanetConfigService {
  _fakeConfigs: Array<PlanetConfiguration> = [
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



  constructor(private _http: HttpClient) {}

  getPlanetConfig(): Observable<Array<PlanetConfiguration>> {
    return of(this._fakeConfigs);
  }



}
