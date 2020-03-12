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
                CategoryId="C130",
                CategoryName="fashion",
                BriefDetails="show some love to your loved ones"
            });
            
        }
        [Test]
        public void TestAddSubcategory()
        {
            _repo.AddSubcategory(new SubCategory()
            {
                SubcategoryId = "cs104",
                SubcategoryName = "electronic",
                CategoryId = "C130",
                BriefDetails = "lovable keychains to your loved ones",
                Gst = 20


            });
        }
    }
}
