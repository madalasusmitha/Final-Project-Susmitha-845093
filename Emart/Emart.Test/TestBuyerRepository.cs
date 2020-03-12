using Emart.BuyerService.Repositories;
using Emart.BuyerService.Models;
using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;

namespace Emart.Test
{
    public class TestBuyerRepository
    {
        BuyerRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new BuyerRepository(new EMARTDBContext());
        }
        [Test]
        [Description("to test add to cart")]
        public void Addtocart()
        {
            _repo.AddtoCart(new Cart()
            {
                Cartid = "Emcr06",
                Itemid = "add34",
                Categoryid = "C101",
                Subcategoryid = "cs103",
                Itemname= "flower",
                Price = 20,
                Description = "flower Keychain",
                Stocknumber = 30,
                Remarks = "super",
                Sellerid = "21",
                Buyerid="235",
                Image = "keychain.jpg"
            });

        }
        [Test]
        [Description("to test buy item")]
        public void Buyitem()
        {
            _repo.BuyItem(new PurchaseHistory()
            {
                Id = "47",
                Buyerid = "234",
                Sellerid = "21",
                TransactionId = "347",
                TranscationType = "cashondelivery",
                Itemid = "add97",
                NumberOfItems = 78,
                DateTime = System.DateTime.Now,
                Remarks="none"

            }) ;
        }
        [Test]
        [Description("to test edit profile ")]
        public void TestEditProfile()
        {
            Buyer Buyer = _repo.GetProfile("10");
           Buyer.Mobilenumber = "9581719882";
            _repo.EditProfile(Buyer);
           Buyer Buyer1 = _repo.GetProfile("10");
            Assert.AreSame(Buyer,Buyer1);

        }
        [Test]
        [Description("to test Get All Items")]

        public void TestGetAllItems()
        {
            var result = _repo.GetAllItems();
            Assert.IsNotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        [Description("to test Get cart by id")]

        public void TestCartItems()
        {
            var result = _repo.GetCartItems();
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("to test Get All categories")]

        public void TestGetAllcategories()
        {
            var result = _repo.GetCategories();
            Assert.IsNotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        [Description("to test purchase history based on bid")]
        public void Testpurchase()
        {
            var result = _repo.PurchaseHistory("234 ");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("to test to search item by name")]
        public void TestsearchByname()
        {
            var result = _repo.SearchItemByName("panda");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("to test to search item by category")]
        public void TestsearchBycategory()
        {
            var result = _repo.SearchItemByCategory("10");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("to test to search item by subcategory")]
        public void TestsearchBysubcategory()
        {
            var result = _repo.SearchItemBySubCategory("0001");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("to test delete cart items")]
        public void TestTodelete()
        {
             _repo.DeleteCartItem("Emcr06");
           
            
        }


    }
}
