using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AccountService.Models;

namespace Emart.AccountService.Repository
{
   public interface IAccountRepository

    {
        
        bool sellerLogin(string username, string password);
        bool BuyerLogin(string username, string password);
        void RegisterSeller(Seller obj);
        void RegisterBuyer(Buyer obj);

    }
}
