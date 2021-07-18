using exoplanet_catalog.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace exoplanet_catalog.Repository
{
    public class PlanetConfigRepository : IPlanetConfigRepository
    {
        public async Task<List<PlanetConfig>> GetPlanetConfigs()
        {
			try
			{
				List<PlanetConfig> configList = new List<PlanetConfig>();

				using (var httpClient = new HttpClient()) {
					using (var response = await httpClient.GetAsync("https://apc01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fgist.githubusercontent.com%2Fjoelbirchler%2F66cf8045fcbb6515557347c05d789b4a%2Fraw%2F9a196385b44d4288431eef74896c0512bad3defe%2Fexoplanets&data=04%7C01%7Cashwin.mishra%40cognizant.com%7C5c8caa4f4b1f4e66bcaf08d94a0606a7%7Cde08c40719b9427d9fe8edf254300ca7%7C0%7C0%7C637622212029675670%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=DQ2ElKpYQpU0wJtolpLszHnxbucV4bEavFgBaaExGkY%3D&reserved=0")) {

						string apiResponse = await response.Content.ReadAsStringAsync();
						configList = JsonConvert.DeserializeObject<List<PlanetConfig>>(apiResponse);
					}
				}

				return configList;
			}
			catch (Exception ex)
			{
				Console.WriteLine($"Exception in repository: {ex}");
				throw ex;
			}
        }
    }
}
