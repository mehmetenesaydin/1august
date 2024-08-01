using _1august.Model.Entities.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace _1august.Server.Controllers
{
    [ApiController]
    [Route("api/[Controller]/[Action]")]
    public class ContractController : Controller
    {
        [HttpPost]
        public async Task<IActionResult> OnlinePlatformServiceAgreement(OnlinePlatformServiceAgreementModel model)
        {

            string sozlesmemetni = @"B2B Online Platform Hizmet Sözleşmesi
«Contract_No»
Bu Sözleşme, aşağıda belirtilen Taraflar arasında «Effective_Date» tarihinde yapılmıştır.

Taraflar:
•	«Platform_Sahibi_Şirket_Adı»: «Company_A_Address_», «Country_A» ( «Vergi_Numarası_A» ) ile kayıtlı (bundan böyle ""Platform"" olarak anılacaktır).
•	«Yurt_Dışı_İş_Ortağı_Şirket_Adı»: «Company_B_Address_», «Country_B» ( «Vergi_Numarası_B») ile kayıtlı (bundan böyle ""Yurt Dışı Ortak"" olarak anılacaktır).
Sözleşmenin Konusu:

Platform: jlglobal.shop

Bu Sözleşme'nin konusu, Platform'un sunduğu online platform üzerinden Yurt Dışı Ortak'ın ürünlerini Platform Üyelerine satmasına imkan sağlamaktır.

Madde 1. Ürün ve Hizmetlerin Satışı:

1.1. Yurt Dışı Ortak, Platform'da satışa sunmak istediği ürünlerin listesini ve detaylı bilgilerini Platforma sunacaktır. 

1.2. Platform, Yurt Dışı Ortak'ın ürün ve hizmetlerini Platform Üyelerine tanıtacak ve satışlarını kolaylaştıracak şekilde pazarlama faaliyetleri yürütecektir. 

1.3. Platform Üyeleri, Platform üzerinden Yurt Dışı Ortak'ın ürünlerini satın alabileceklerdir.

1.4. Platform, Platform Üyelerinden gelen siparişleri Yurt Dışı Ortak'a iletecek ve siparişlerin teslimatını Yurt Dışı Ortak'ın sorumluluğunda gerçekleştirecektir.

Madde 2. Ödeme:

2.1. Platform Üyeleri, Yurt Dışı Ortak'ın ürünlerini Platform üzerinden satın aldıklarında, ödemeyi Platform'a yapacaklardır. 

2.2. Platform, sipariş bedelini tahsil ettikten sonra, Yurt Dışı Ortak'ın payını, Platform'un komisyonunu ve diğer masrafları düşerek Yurt Dışı Ortak'a aktaracaktır. 

2.3. Ödemeler, «Ödeme_Sıklığı_»( «Ödeme_Şekli_») şeklinde gerçekleştirilecektir.

Madde 3. Yurt Dışı Hizmetler:

3.1. Yurt Dışı Ortak, Platform Üyelerine yurt dışı pazarlama, satış ve müşteri desteği gibi hizmetler sunacaktır. 

3.2. Yurt Dışı Ortak, Platform Üyelerine sunduğu hizmetler için Platform'a komisyon ödeyecektir. 

3.3. Yurt Dışı Ortak'ın Platform Üyelerine sunduğu hizmetlerin kapsamı ve ücretleri, Ek Protokol'de yer alacaktır.

Madde 4. Fikri Mülkiyet:

4.1. Her iki Taraf da kendi fikri mülkiyet haklarını korumakla yükümlüdür. 

4.2. Taraflar, birbirlerinin önceden yazılı izni olmadan diğer Taraf'ın fikri mülkiyet haklarını kullanamaz veya kullandıramaz.

Madde 5. Gizlilik:

5.1. Her iki Taraf da, diğer Taraf'a ait tüm gizli bilgileri gizli tutmakla yükümlüdür. 

5.2. Taraflar, gizli bilgileri, önceden yazılı izin olmadan üçüncü kişilere ifşa edemez veya kullandıramaz.

Madde 6. Sözleşmenin Süresi ve Feshi:

6.1. Bu Anlaşma, Yürürlük Tarihi itibariyle yürürlüğe girecek ve işbu Anlaşmada aksi öngörülmedikçe [contract Süresi yıl] yıllık bir Süre boyunca geçerliliğini koruyacaktır.

6.2. Her iki Taraf da, «Bildirim_Süresi_» «Bildirim_Şekli_» öncesinde yazılı bildirimde bulunarak bu Sözleşmeyi feshedebilir. 

6.3. Fesih halinde, Platform, Yurt Dışı Ortak'ın Platform'da kalan bakiye payını «Fesih_Ödeme_Süresi» ( «Ödeme_Şekli_») içinde ödeyecektir.

Madde 7. Yurt Dışı Ortağın Taahhütleri:

7.1. Yurt Dışı Ortak, Platform'da satışa sunulan ürünlerin tüm yasal düzenlemelere uygun olduğunu ve gerekli tüm sertifikalara sahip olduğunu beyan ve taahhüt eder. 

7.2. Yurt Dışı Ortak, Platform Üyelerine sunulan ürünlerin kusursuz ve sağlam olduğunu ve Platform Üyelerinin yasal haklarını koruyan tüm garantileri verdiğini beyan ve taahhüt eder.

7.3. Yurt Dışı Ortak, Platform Üyelerinden gelen tüm siparişleri gecikme olmadan ve eksiksiz olarak yerine getireceğini beyan ve taahhüt eder. 

7.4. Yurt Dışı Ortak, Platform Üyelerine karşı tüm müşteri hizmetlerini ve teknik desteği kendisi sağlayacağını ve Platform'un bu konuda herhangi bir sorumluluğu olmadığını beyan ve taahhüt eder. 

7.5. Yurt Dışı Ortak, Platform'da satışa sunduğu ürünlerin fiyatlarını Platform ile önceden yazılı olarak anlaşacak şekilde belirleyeceğini ve Platform'un onayı olmadan fiyatlarda değişiklik yapamayacağını beyan ve taahhüt eder. 

7.6. Yurt Dışı Ortak, Platform'un sunduğu tüm pazarlama ve satış faaliyetlerine iş birliği yapacağını ve Platform'a gerekli tüm bilgileri ve materyalleri sağlayacağını beyan ve taahhüt eder. 

7.7. Yurt Dışı Ortak, bu Sözleşme'den doğan her türlü uyuşmazlıkta Platform'un uğrayacağı tüm zarar ve ziyanları tazmin edeceğini beyan ve taahhüt eder. 

7.8. Yurt Dışı Ortak, bu Sözleşme'nin süresi boyunca ve Sözleşme'nin feshinden sonra 12 ay boyunca Platform'da satışa sunulan ürünleri Platform dışındaki herhangi bir kanaldan platform üyelerine doğrudan veya dolaylı olarak satamayacağını beyan ve taahhüt eder.

Madde 8. Uyuşmazlıkların Çözümü:

8.1. Bu Sözleşme'den doğan her türlü uyuşmazlık, «Mahkeme»Mahkemeleri'nde çözümlenecektir.

Madde 9. Yürürlük:

9.1. Bu Sözleşme, «Effective_Date» tarihinde yürürlüğe girmiştir ve Taraflarca imzalanarak birer nüsha her iki Taraf'a teslim edilmiştir.

Taraflar:

«Platform_Sahibi_Şirket_Adı» 

«Platform_Yetkili_Adı_» «PL_Yetkili_Ünvanı_»  [İmza]

«Yurt_Dışı_İş_Ortağı_Şirket_Adı»

«YD_Yetkili_Adı_» «YD_Yetkili_Ünvanı»  [İmza]
 
B2B Online Platform Hizmet Sözleşmesi

«Contract_No»

Ek Protokol:

Bu Sözleşme'ye Ek Protokol, Platform Üyelerine sunulan yurt dışı hizmetlerin kapsamını ve ücretlerini detaylandıracaktır.

«Brief_Description_of_Collaboration»Ek Protokol, bu Sözleşme'nin ayrılmaz bir parçasını oluşturur.

Taraflar:

«Platform_Sahibi_Şirket_Adı» 

«Platform_Yetkili_Adı_» «PL_Yetkili_Ünvanı_»  [İmza]

«Yurt_Dışı_İş_Ortağı_Şirket_Adı»

«YD_Yetkili_Adı_» «YD_Yetkili_Ünvanı»  [İmza]

";


            Random rnd = new Random();
            string rndDeneme = rnd.Next(0, 999999).ToString();

            sozlesmemetni = sozlesmemetni.Replace("«Contract_No»", rndDeneme);
            sozlesmemetni = sozlesmemetni.Replace("«Effective_Date»", model.Effective_Date.ToShortDateString().ToString());
            sozlesmemetni = sozlesmemetni.Replace("«Platform_Sahibi_Şirket_Adı»", model.Platform_Sahibi_Sirket_Adi);
            sozlesmemetni = sozlesmemetni.Replace("«Vergi_Numarası_A»", model.Vergi_Numarasi_A);
            sozlesmemetni = sozlesmemetni.Replace("«Yurt_Dışı_İş_Ortağı_Şirket_Adı»", model.Yurt_Disi_Is_Ortagi_Sirket_Adi);
            sozlesmemetni = sozlesmemetni.Replace("«Company_A_Address_»", model.Company_A_Address_);
            sozlesmemetni = sozlesmemetni.Replace("«Country_A»", model.Country_A);
            sozlesmemetni = sozlesmemetni.Replace("«Country_B»", model.Country_B);
            sozlesmemetni = sozlesmemetni.Replace("«Company_B_Address_»", model.Company_B_Adress_);
            sozlesmemetni = sozlesmemetni.Replace("«Company_B_Address_»", model.Country_B);
            sozlesmemetni = sozlesmemetni.Replace("«Vergi_Numarası_B»", model.Vergi_Numarasi_B);
            sozlesmemetni = sozlesmemetni.Replace("«Ödeme_Sıklığı_»", model.Odeme_Sikligi.ToString());
            sozlesmemetni = sozlesmemetni.Replace("«Bildirim_Süresi_»", model.Bildirim_Suresi.ToString());
            sozlesmemetni = sozlesmemetni.Replace("«Bildirim_Şekli_» ", model.Bildirim_Sekli.ToString());
            sozlesmemetni = sozlesmemetni.Replace("«Fesih_Ödeme_Süresi»", model.Fesih_Odeme_Suresi.ToString());
            sozlesmemetni = sozlesmemetni.Replace("«Ödeme_Şekli_»", model.Odeme_Sekli_.ToString());
            sozlesmemetni = sozlesmemetni.Replace("«Mahkeme»", model.Mahkeme.ToString());
            sozlesmemetni = sozlesmemetni.Replace("«Platform_Yetkili_Adı_»", model.Platform_Yetkili_Adi.ToString());
            sozlesmemetni = sozlesmemetni.Replace("«PL_Yetkili_Ünvanı_»", model.PL_Yetkili_Unvani_);
            sozlesmemetni = sozlesmemetni.Replace("«YD_Yetkili_Adı_»", model.YD_Yetkili_Adi_);

            sozlesmemetni = sozlesmemetni.Replace("«YD_Yetkili_Ünvanı»", model.YD_Yetkili_Unvani);
            sozlesmemetni = sozlesmemetni.Replace("«Brief_Description_of_Collaboration»", model.Brief_Description_of_Collaboration);


            PdfController pdfc = new PdfController();
            var pdf = await pdfc.OnlinePlatformServiceAgreementPdf(sozlesmemetni);

            return File(pdf, "application/pdf", "Online_Platform_Hizmet_Sozlesmesi.pdf");
        }
    }
}
