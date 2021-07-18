using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace exoplanet_catalog.Models
{
    public class PlanetConfig
    {
        public string PlanetIdentifier { get; set; }
        public int? TypeFlag { get; set; }
        public decimal? PlanetaryMassJpt { get; set; }
        public decimal? RadiusJpt { get; set; }
        public decimal? PeriodDays { get; set; }
        public string SemiMajorAxisAU { get; set; }
        public string Eccentricity { get; set; }
        public string PeriastronDeg { get; set; }
        public string LongitudeDeg { get; set; }
        public string AscendingNodeDeg { get; set; }
        public decimal? InclinationDeg { get; set; }
        public string SurfaceTempK { get; set; }
        public string AgeGyr { get; set; }
        public string DiscoveryMethod { get; set; }
        public int? DiscoveryYear { get; set; }
        public string LastUpdated { get; set; }
        public string RightAscension { get; set; }
        public string Declination { get; set; }
        public string DistFromSunParsec { get; set; }
        public decimal? HostStarMassSlrMass { get; set; }
        public decimal? HostStarRadiusSlrRad { get; set; }
        public decimal? HostStarMetallicity { get; set; }
        public decimal? HostStarTempK { get; set; }
        public string HostStarAgeGyr { get; set; }
    }
}
