﻿using System;
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

        public void BuyItem(PurchaseHistory obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
        }

        public void EditProfile(Buyer obj)
        {
            _context.Buyer.Update(obj);
            _context.SaveChanges();
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
