using Emart.AdminService.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using Emart.AdminService.Models;
using NUnit.Framework;

namespace Emart.Test
{
     public class TestAdminRepository
    {
        AdminRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new AdminRepository(new EMARTDBContext());
        }
        [Test]
        public void TestAddCategory()
        {
            _repo.AddCategory(new Category()
            {
                CategoryId="C0",
                CategoryName="girlsfashion",
                BriefDetails="show some love to your loved ones"
            });
            
        }
        [Test]
        public void TestAddSubcategory()
        {
            _repo.AddSubcategory(new SubCategory()
            {
                SubcategoryId = "c04",
                SubcategoryName = "chudidars",
                CategoryId = "C0",
                BriefDetails = "lovable keychains to your loved ones",
                Gst = 20


            });
        }
    }
}
