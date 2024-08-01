using _1august.Model.Entities.ViewModels;
using iText.Kernel.Pdf;
using iText.Layout;
using iText.Layout.Element;
using iText.IO.Font;
using iText.IO.Font.Constants;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Threading.Tasks;
using iText.Kernel.Font;

namespace _1august.Server.Controllers
{
    [ApiController]
    [Route("api/[Controller]/[Action]")]
    public class PdfController : Controller
    {
        [HttpPost]
        public async Task<byte[]> OnlinePlatformServiceAgreementPdf([FromBody] string metin)
        {
            try
            {
                using (var stream = new MemoryStream())
                {
                    // PDF belgesi oluştur
                    using (var writer = new PdfWriter(stream))
                    {
                        using (var pdf = new PdfDocument(writer))
                        {
                            var document = new Document(pdf);

                            // Yazı tipi ve boyut ayarları
                            var font = PdfFontFactory.CreateFont(StandardFonts.HELVETICA);

                            // Başlık
                            var title = new Paragraph("B2B Online Platform Hizmet Sözleşmesi")
                                .SetFont(font)
                                .SetFontSize(16)
                                .SetBold()
                                .SetTextAlignment(iText.Layout.Properties.TextAlignment.CENTER)
                                .SetMarginBottom(20);

                            document.Add(title);

                            // Metin içerik
                            var paragraphs = new[]
                            {
                                metin
                            };


                            foreach (var paragraph in paragraphs)
                            {
                                // Başlıklar ve maddeler için kalınlık ve düzenleme
                                if (paragraph.StartsWith("Madde") || paragraph.StartsWith("B2B Online Platform Hizmet Sözleşmesi"))
                                {
                                    document.Add(new Paragraph(paragraph)
                                        .SetFont(font)
                                        .SetFontSize(12)
                                        .SetBold()
                                        .SetMarginBottom(10));
                                }
                                else if (paragraph.StartsWith("•") || paragraph.StartsWith("•"))
                                {
                                    document.Add(new Paragraph(paragraph)
                                        .SetFont(font)
                                        .SetFontSize(12)
                                        .SetMarginLeft(10)
                                        .SetMarginBottom(5));
                                }
                                else
                                {
                                    document.Add(new Paragraph(paragraph)
                                        .SetFont(font)
                                        .SetFontSize(12)
                                        .SetMarginBottom(5));
                                }
                            }

                            // PDF dosyasını kapat
                            document.Close();
                        }
                    }

                    // Stream içeriğini döndür
                    var fileContent = stream.ToArray();
                    stream.Dispose();

                    // Dosya içeriğini ve adını ayarlama
                    //var fileName = "B2B_Online_Platform_Hizmet_Sozlesmesi.pdf";
                    //return File(fileContent, "application/pdf", fileName);

                    return fileContent;
                }
            }
            catch (Exception ex)
            {
                // Hata günlüğü ve kullanıcıya hata mesajı döndürme
                return null;
            }
        }
    }
}
