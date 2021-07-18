using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using exoplanet_catalog.Models;
using exoplanet_catalog.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace exoplanet_catalog.Controllers
{
    [Route("api/")]
    [ApiController]
    public class PlanetConfigController : ControllerBase
    {
        private readonly IPlanetConfigRepository _planetConfigRepository;

        public PlanetConfigController(IPlanetConfigRepository planetConfigRepository)
        {
            _planetConfigRepository = planetConfigRepository;
        }

        [HttpGet("records")]
        public async Task<List<PlanetConfig>> GetPlanetConfigs() {

            try
            {
                var configList = await _planetConfigRepository.GetPlanetConfigs();

                return configList;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Exception in controller: {ex}");
                throw ex;
            }
        }
    }
}