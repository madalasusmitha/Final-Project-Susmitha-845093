using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AccountService.Models;

namespace Emart.AccountService.Repository
{
    public class AccountRepository:IAccountRepository
    {
        private readonly EMARTDBContext _context;
        public AccountRepository(EMARTDBContext context)
        {
            _context = context;

        }

        public Buyer BuyerLogin(string username, string password)
        {
            return  _context.Buyer.SingleOrDefault(e => e.Username == username && e.Password == password);
        }

        //public Seller sellerLogin(string username, string password)
        //{

        //    var c = _context.Seller.SingleOrDefault(e => e.Username == username && e.Password == password);
        //   if(c!=null)
        //    {

        //        return true;
        //    }
        //   else
        //    {
        //        return false;
        //    }
        //}

        public void RegisterBuyer(Buyer obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
        }

        public void RegisterSeller(Seller obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
        }

        public Seller sellerLogin(string username, string password)
        {
            return  _context.Seller.SingleOrDefault(e => e.Username == username && e.Password == password);
        }

        ////public bool BuyerLogin(string username, string password)
        ////{

        ////     var b = _context.Buyer.SingleOrDefault(e => e.Username == username && e.Password == password);
        ////    if (b!=null)
        ////    {

        ////        return true;
        ////    }
        ////    else
        ////    {
        ////        return false;
        ////    }

        ////} 
    } 
}
