using Emart.SellerService.Repository;
using Emart.SellerService.Models;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Emart.Test
{
     public class TestItemRepository
    {
        ItemRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new ItemRepository(new EMARTDBContext());
        }
        [Test]
        [Description("to test add items")]

        public void TestAddItem()
        {
            _repo.Additem(new Items()
            {
                Id = "add53",
                CategoryId = "C0",
                SubcategoryId= "c04",
                ItemName="flower",
                Price=20,
                Description="flower Keychain",
                StockNumber=30,
                Remarks="super",
                Sid="235",
                Image="keychain.jpg"

            }) ;
        }
        [Test]
        [Description("to test delete  Items")]

        public void TestDeleteItem()
        {
            _repo.Deleteitem("add34");
            var result = _repo.Getitem("add34");
            Assert.Null(result);
        }
        [Test]
        [Description("to test Get Item by id")]

        public void TestViewItems()
        {
            var result = _repo.viewitems("21");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("to test Get All Items")]

        public void TestviewItems()
        {
            var result = _repo.Viewitems();
            Assert.IsNotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        [Description("to test update items")]
        public void TestUpdateItem()
        {
            Items items = _repo.Getitem("add34");
            items.Image ="saree.jpg";
            _repo.Updateitem(items);
            Items item1 = _repo.Getitem("add34");
            Assert.AreSame(items, item1);
        }
        [Test]
        [Description("to test to get subcategory based on category id")]
        public void Testcategory()
        {
            var result = _repo.GetSubCategories("235");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("to test get by id")]
        public void TestGetItem()
        {
            var result = _repo.Getitem("add54");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("to test Get categories")]

        public void Testcategories()
        {
            var result = _repo.GetCategories();
            Assert.IsNotNull(result);
            Assert.Greater(result.Count, 0);
        }
    }
}
