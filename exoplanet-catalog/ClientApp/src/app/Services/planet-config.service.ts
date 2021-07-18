/** ----------------------------------------------------------------------
 * (C) Copyright 2020 Cognizant TriZetto Software Group, Inc.  All rights reserved.
 * Confidential and Trade Secret Material.
 * ----------------------------------------------------------------------*/

import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, of, Subject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PlanetConfiguration } from '../Models/PlanetConfiguration';


@Injectable({
  providedIn: 'root'
})
export class PlanetConfigService {

  constructor(private http: HttpClient) {
  }

  getPlanetConfig(): Observable<Array<PlanetConfiguration>> {
    return this.http.get<Array<PlanetConfiguration>>('https://localhost:5001/api/records').pipe(catchError(error => throwError(error)));;
  }
}

