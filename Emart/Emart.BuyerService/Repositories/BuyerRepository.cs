using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.BuyerService.Models;


namespace Emart.BuyerService.Repositories
{
    public class BuyerRepository:IBuyerRepository
    {
        private readonly EMARTDBContext _context;
        public BuyerRepository(EMARTDBContext context)
        {
            _context = context;
        }

        public void AddtoCart(Cart cart)
        {
            _context.Add(cart);
            _context.SaveChanges();
        }

        public void BuyItem(PurchaseHistory obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
        }

        public void DeleteCartItem(string Cartid)
        {
            Cart i = _context.Cart.Find(Cartid);
            _context.Remove(i);
            _context.SaveChanges();


        }

        public void EditProfile(Buyer obj)
        {
            _context.Buyer.Update(obj);
            _context.SaveChanges();
        }

        public List<Items> GetAllItems()
        {
            return _context.Items.ToList();

        }

        public List<Cart> GetCartItems()
        {
            return _context.Cart.ToList();
        }

        public List<Category> GetCategories()
        {
            return _context.Category.ToList();
        }

        public Buyer GetProfile(string id)
        {
            return _context.Buyer.Find(id);
        }

        
        public List<PurchaseHistory> PurchaseHistory(string bid)
        {
            List<PurchaseHistory> item = _context.PurchaseHistory.Where(i => i.Buyerid== bid).ToList();
            return item;
        }

        public List<Items> SearchItemByCategory(string id)
        {
            return _context.Items.Where(i => i.CategoryId == id).ToList();
        }

        public List<Items> SearchItemByName(string name)
        {
            return _context.Items.Where(i => i.ItemName == name).ToList();
        }

        public List<Items> SearchItemBySubCategory(string id)
        {
            return _context.Items.Where(i => i.SubcategoryId == id).ToList();

        }
    }
}
