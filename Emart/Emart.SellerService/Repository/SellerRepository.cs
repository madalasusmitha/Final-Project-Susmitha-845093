using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Models;


namespace Emart.SellerService.Repository
{
    public class SellerRepository:ISellerRepository
    {
        private readonly EMARTDBContext _context;
        public SellerRepository(EMARTDBContext context)
        {
            _context = context;

        }
        public void Editprofile(Seller obj)
        {
            //Seller s = _context.Seller.Find(obj.Id);
            //s.Username = obj.Username;
            //s.Companyname = obj.Companyname;
            //s.Briefaboutcompany = obj.Briefaboutcompany;
            //s.Gstin = obj.Gstin;
            //s.Contactnumber = obj.Contactnumber;
            //s.Emailid = obj.Emailid;
            //s.PostalAddress = obj.PostalAddress;
            _context.Seller.Update(obj);
            _context.SaveChanges();
        }

        public Seller GetProfile(string sid)
        {
            return _context.Seller.Find(sid);
        }

        
    }
}
