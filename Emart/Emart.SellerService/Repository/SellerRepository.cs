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
            _context.Seller.Update(obj);
            _context.SaveChanges();
        }

        public Seller GetProfile(string sid)
        {
            return _context.Seller.Find(sid);
        }

        
    }
}
