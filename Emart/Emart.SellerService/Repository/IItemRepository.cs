using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Models;

namespace Emart.SellerService.Repository
{
     public interface IItemRepository
    {
        void Additem(Items obj);
        List<Items> viewitems(string sid);
        List<Items> Viewitems();
        void Deleteitem(string id);
        void Updateitem(Items obj);
        Items Getitem(string itemid);
        List<Category> GetCategories();
        List<SubCategory> GetSubCategories(string CategoryId);

    }
}
