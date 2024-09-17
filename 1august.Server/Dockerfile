# Use the official .NET image from the Docker Hub
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["1august.Server/1august.Server.csproj", "1august.Server/"]
RUN dotnet restore "1august.Server/1august.Server.csproj"
COPY . .
WORKDIR "/src/1august.Server"
RUN dotnet build "1august.Server.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "1august.Server.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SozlesmeOtomasyonu.dll"]
