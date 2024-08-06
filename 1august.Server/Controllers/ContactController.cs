using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public ContactController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> PostContactForm([FromBody] ContactForm contactForm)
    {
        if (contactForm == null)
        {
            return BadRequest("Invalid data.");
        }

        _context.ContactForms.Add(contactForm);
        await _context.SaveChangesAsync(); // Bu metodun kullanılabilir olması gerekir

        return Ok(contactForm);
    }
}
