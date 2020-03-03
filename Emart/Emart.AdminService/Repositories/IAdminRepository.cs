using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AdminService.Models;

namespace Emart.AdminService.Repositories
{
    public interface IAdminRepository
    {
        void AddSubcategory(SubCategory obj);
        void AddCategory(Category obj);
        List<Category> GetAllCategories();
    }
}
