using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AdminService.Models;
using Emart.AdminService.Controllers;

namespace Emart.AdminService.Repositories
{
    public class AdminRepository:IAdminRepository
    {
        private readonly EMARTDBContext _context;
        public AdminRepository(EMARTDBContext context)
        {
            _context = context;

        }
        public void AddCategory(Category obj)
        {
            _context.Add(obj);
            _context.SaveChanges();

        }

        public void AddSubcategory(SubCategory obj)
        {
            _context.Add(obj);
            _context.SaveChanges();

        }

        public List<Category> GetAllCategories()
        {
            return _context.Category.ToList();
        }
    }
}
