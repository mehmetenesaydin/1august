using _1august.Model.Entities.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens; // JWT için gerekli
using System.IdentityModel.Tokens.Jwt; // JWT için gerekli
using System.Security.Claims;
using System.Text;

namespace _1august.Server.Controllers
{
    [ApiController]
    [Route("api/[Controller]/[Action]")]
    public class AuthController : ControllerBase
    {
        private readonly YourDbContext _context;

        public AuthController(YourDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Register(UserRegisterModel model)
        {
            var user = new User
            {
                Username = model.Username,
                Email = model.Email,
                PasswordHash = model.Password
            };

            //user.PasswordHash = _passwordHasher.HashPassword(user, model.Password);

            try
            {
                _context.Users.Add(user);
                await _context.SaveChangesAsync();

                return Ok(new { message = "User registered successfully" });
            }
            catch (Exception e)
            {
                return BadRequest(new { message = "User registered error" });
            }
        }

        [HttpPost]
        public async Task<IActionResult> Login(UserLoginModel model)
        {
            var user = await _context.Users.SingleOrDefaultAsync(u => u.Username == model.Username);

            //if (user == null || _passwordHasher.VerifyHashedPassword(user, user.PasswordHash, model.Password) != PasswordVerificationResult.Success)
            //{
            //    return Unauthorized();
            //}

            if (user == null)
            {
                return Unauthorized();
            }

            var token = GenerateJwtToken(user); // JWT token oluşturma işlemi

            return Ok(new { Token = token });
        }

        // JWT token oluşturma işlemi
        private string GenerateJwtToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("MySuperSecretKeyForJwtToken12345!@#"); // Gizli anahtarınızı buraya ekleyin
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.UserId.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
