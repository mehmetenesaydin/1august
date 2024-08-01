using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1august.Model.Entities.ViewModels
{
    public class OnlinePlatformServiceAgreementModel
    {
        public DateTime Effective_Date { get; set; }
        public string Platform_Sahibi_Sirket_Adi { get; set; }
        public string Vergi_Numarasi_A { get; set; }
        public string Company_A_Address_ { get; set; }
        public string Company_B_Adress_ { get; set; }
        public string Vergi_Numarasi_B { get; set; }
        public string Country_A { get; set; }
        public string Country_B { get; set; }
        public string Platform_Yetkili_Adi { get; set; }
        public string Yurt_Disi_Is_Ortagi_Sirket_Adi { get; set; }
        public int Odeme_Sikligi { get; set; }
        public int Odeme_Sekli_ { get; set; }
        public int Bildirim_Suresi { get; set; }
        public int Bildirim_Sekli { get; set; }
        public int Fesih_Odeme_Suresi { get; set; }
        public string Mahkeme { get; set; }
        public string Platform_Yetkili_Adi_ { get; set; }
        public string PL_Yetkili_Unvani_ { get; set; }
        public string YD_Yetkili_Adi_ { get; set; }
        public string YD_Yetkili_Unvani { get; set; }
        public string Brief_Description_of_Collaboration { get; set; }
    }
}
