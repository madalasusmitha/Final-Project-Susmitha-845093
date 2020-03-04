using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AccountService.Models;

namespace Emart.AccountService.Repository
{
   public interface IAccountRepository

    {
        
       public Seller sellerLogin(string username, string password);
       public Buyer BuyerLogin(string username, string password);
       public  void RegisterSeller(Seller obj);
       public  void RegisterBuyer(Buyer obj);

    }
}
