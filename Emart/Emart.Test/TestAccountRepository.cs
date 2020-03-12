using Emart.AccountService.Models;
using Emart.AccountService.Repository;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Emart.Test
{
     public class TestAccountRepository
    {
        AccountRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new AccountRepository(new EMARTDBContext());
        }
        [Test]
        [Description("to test add seller")]
        public void TestAddSeller()

        {
            _repo.RegisterSeller(new Seller()
            {
                Id = "EMARTSEL134",
                Username = "pra",
                Password = "chinnu",
                Companyname = "infosys",
                Contactnumber = "9000326398",
                Emailid = "prasu@123.com",
                Gstin = "90",
                Briefaboutcompany = "good",
                Website = "www.infosys.com",
                PostalAddress = "karamchedu"


            });
        }
        [Test]
        [Description("to test add buyer")]
        public void AddBuyer()
        {
            _repo.RegisterBuyer(new Buyer()
            {
                Id = "EmartBuy132",
                Createddatetime = System.DateTime.Now,
                Username = "vijaya",
                Password = "sushu",
                Emailid = "vijaysush@gmail.com",
                Mobilenumber = "8142070133"
            });
        }
            [Test]
            [Description("to check seller login")]
            public void TestSellerLogin()
        {
            var result = _repo.sellerLogin("tella", "sunitha");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("to check Buyer login")]
        public void TestBuyerLogin()
        {
            var result = _repo.BuyerLogin("susmitha", "madala");
            Assert.IsNotNull(result);
        }


    }
}
