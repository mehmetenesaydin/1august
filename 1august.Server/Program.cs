using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Veritabanı bağlantı dizesini almak
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

// DbContext'i yapılandırma
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString));

// Diğer servisler
builder.Services.AddControllers();

var app = builder.Build();

// Hata ayıklama sayfası
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

// Middleware'lar
app.UseRouting();
app.UseAuthorization();

// API yolları
app.MapControllers();

app.Run();
