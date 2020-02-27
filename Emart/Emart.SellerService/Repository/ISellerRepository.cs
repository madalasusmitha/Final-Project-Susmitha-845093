using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Models;

namespace Emart.SellerService.Repository
{
   public  interface ISellerRepository
    {
       
        void Editprofile(Seller obj);
        Seller GetProfile(string sid);

    }
}
