using exoplanet_catalog.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace exoplanet_catalog.Repository
{
    public interface IPlanetConfigRepository
    {
        Task<List<PlanetConfig>> GetPlanetConfigs();

    }
}
