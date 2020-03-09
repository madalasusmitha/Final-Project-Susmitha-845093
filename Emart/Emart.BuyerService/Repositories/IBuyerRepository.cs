using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.BuyerService.Models;

namespace Emart.BuyerService.Repositories
{
     public interface IBuyerRepository
    {
        List<Items> SearchItemByName(string name);
        List<Items> SearchItemByCategory(string id);
        List<Items> SearchItemBySubCategory(string id);
        Buyer GetProfile(string id);
        void EditProfile(Buyer obj);
        void BuyItem(PurchaseHistory obj);
        List<PurchaseHistory> PurchaseHistory(string bid);
        List<Items> GetAllItems();
        void AddtoCart(Cart cart);
        List<Cart> GetCartItems(string bid);
        void DeleteCartItem(string Cartid);
        List<Category> GetCategories();
    }
}
