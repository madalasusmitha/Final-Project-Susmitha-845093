using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Models;

namespace Emart.SellerService.Repository
{
    public class ItemRepository: IItemRepository
    {
    private readonly EMARTDBContext _context;
    public ItemRepository(EMARTDBContext context)
    {
        _context = context;

    }
        public void Additem(Items obj)
        {
            _context.Add(obj);
            _context.SaveChanges();

        }

        public void Deleteitem(string id)
        {
            Items i = _context.Items.Find(id);
            _context.Remove(i);
            _context.SaveChanges();

            
        }

        public List<Category> GetCategories()
        {
            return _context.Category.ToList();
        }

        public Items Getitem(string itemid)
        {
            return _context.Items.Find(itemid);
        }

        public List<SubCategory> GetSubCategories(string categoryid)
        { 
            return _context.SubCategory.Where(e => e.CategoryId == categoryid).ToList();
        }

        public void Updateitem(Items obj)
        {
            _context.Items.Update(obj);
            _context.SaveChanges();
        }

        public List<Items> viewitems(string sid)
        {
            return _context.Items.Where(e=>e.Sid==sid).ToList();
        }

        public List<Items> Viewitems()
        {
            return _context.Items.ToList();
        }
    }
}
