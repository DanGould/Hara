﻿using Hara.Abstractions;
using Hara.XamarinCommon.Services;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.MobileBlazorBindings;
using Xamarin.Forms;

namespace Hara.XamarinCommon
{
    public class App : Application
    {
        public App(IFileProvider fileProvider = null)
        {
            var hostBuilder = MobileBlazorBindingsHost.CreateDefaultBuilder()
                .ConfigureServices((hostContext, services) =>
                {
                    // Adds web-specific services such as NavigationManager
                    services.AddBlazorHybrid();

                    // Register app-specific services
                    services.AddSingleton<ICounterState, CounterState>();
                    services.AddSingleton<IWebsiteLauncher, WebsiteLauncher>();
                    services.AddSingleton<IWeatherForecastFetcher, WeatherForecastFetcher>();
                })
                .UseWebRoot("Hara/wwwroot");

            if (fileProvider != null)
            {
                hostBuilder.UseStaticFiles(fileProvider);
            }
            else
            {
                hostBuilder.UseStaticFiles();
            }

            var host = hostBuilder.Build();

            MainPage = new ContentPage {Title = "My Application"};
            host.AddComponent<Main>(parent: MainPage);
        }

        protected override void OnStart()
        {
        }

        protected override void OnSleep()
        {
        }

        protected override void OnResume()
        {
        }
    }
}