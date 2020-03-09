using Emart.SellerService.Models;
using Emart.SellerService.Repository;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Emart.Test
{
     public class TestSellerRepository
    {
        SellerRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new SellerRepository(new EMARTDBContext());
        }
       [Test]
       public void TestGetProfile()
        {
            var result = _repo.GetProfile("21");
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestEditProfile()
        {
            Seller seller = _repo.GetProfile("22");
            seller.Companyname = "Amazon";
            seller.Contactnumber = "9581719882";
            _repo.Editprofile(seller);
            Seller seller1 = _repo.GetProfile("22");
            Assert.AreSame(seller, seller1);

        }

    }
}
