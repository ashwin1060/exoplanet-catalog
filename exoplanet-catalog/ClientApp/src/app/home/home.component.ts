import { Component, OnInit } from '@angular/core';
import { PlanetConfiguration } from '../Models/PlanetConfiguration';
import { PlanetConfigService } from '../Services/planet-config.service';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loadingData: boolean = true;
  planetConfigurations: Array<PlanetConfiguration>;
  planet: PlanetConfiguration;
  orphanPlanets: number;
  hottestStar: number;
  discoveryYears: Array<number>;

  smallPlanets: number = 0;
  mediumPlanets: number = 0;
  largePlanets: number = 0;

  constructor(private planetService: PlanetConfigService) {
    this.planetConfigurations = new Array<PlanetConfiguration>();
    this.discoveryYears = new Array<number>();
    this.planet = new PlanetConfiguration();
    this.orphanPlanets = 0;
    this.hottestStar = 0;
  }


  ngOnInit(): void {
    this.planetService.getPlanetConfig().subscribe((data: Array<PlanetConfiguration>)=>{
      this.loadingData = false;
      this.planetConfigurations = data;

      // Number of orphan planets
      let orphans = this.planetConfigurations.filter(planet => {
        return planet.typeFlag === 3;
      });
      this.orphanPlanets = orphans.length;

      // Find the planet around the hottest star.
      for (let index = 0; index < this.planetConfigurations.length; index++) {
        const planet = this.planetConfigurations[index];

        if(planet.hostStarTempK !== null || planet.hostStarTempK !== undefined){
          if(this.hottestStar <= planet.hostStarTempK){
            this.hottestStar = planet.hostStarTempK;
            this.planet = planet;
          }
        }
      }

      // get all sorted discovery years
      this.discoveryYears = [...new Set(data.map(item => item.discoveryYear))];
      this.discoveryYears.sort((a,b)=> a-b);

    });
  }

  // show planet sizes based on year of discovery
  onSelectionChange(year): void{
    this.smallPlanets = 0;
    this.mediumPlanets = 0;
    this.largePlanets = 0;

    let selectedYear = year.value;

    let planetsFromSlectedYear = this.planetConfigurations.filter(planet =>{
      return planet.discoveryYear === selectedYear;
    });

    if(planetsFromSlectedYear !== undefined && planetsFromSlectedYear !== null && planetsFromSlectedYear.length > 0){
      for (let i = 0; i < planetsFromSlectedYear.length; i++) {
        const p = planetsFromSlectedYear[i];

        if(p.radiusJpt <= 1){
          this.smallPlanets++;
        }else if(p.radiusJpt<=2){
          this.mediumPlanets++;
        }else if(p.radiusJpt >2){
          this.largePlanets++;
        }
      }
    }
  }
}
