#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src

RUN curl -sL https://deb.nodesource.com/setup_12.x |  bash -
RUN apt-get install -y nodejs

COPY ["exoplanet-catalog/ExoplanetCatalog.csproj", "exoplanet-catalog/"]
RUN dotnet restore "exoplanet-catalog/ExoplanetCatalog.csproj"

COPY . .
WORKDIR "/src/exoplanet-catalog"
RUN dotnet build "ExoplanetCatalog.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ExoplanetCatalog.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ExoplanetCatalog.dll"]