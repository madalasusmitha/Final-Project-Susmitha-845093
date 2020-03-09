using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.BuyerService.Models;
using Emart.BuyerService.Repositories;

namespace Emart.BuyerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuyerController : ControllerBase
    {
        private readonly IBuyerRepository _repo;
        public BuyerController(IBuyerRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("BuyItem")]
        public IActionResult BuyItem(PurchaseHistory item)
        {
            try
            {
                _repo.BuyItem(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [Route("AddCart")]
        public void AddCart(Cart item)
        {
           
            
                _repo.AddtoCart(item);
                Console.WriteLine("Record Added");
            
               
            
        }
        [HttpGet]
        [Route("GetCartItems/{bid}")]
        public IActionResult get(string bid)
        {
            try
            {
                return Ok(_repo.GetCartItems(bid));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpDelete]
        [Route("Delete/{id}")]
        public void Delete(string cartid)
        {
            try
            {
                _repo.DeleteCartItem(cartid);
                Console.WriteLine("item deleted");

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
        [HttpPut]
        [Route("EditProfile")]
        public IActionResult Editprofile(Buyer item)
        {
            try
            {
                _repo.EditProfile(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetProfile/{id}")]
        public IActionResult GetProfile(string id)
        {
            try
            {
                return Ok(_repo.GetProfile(id));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("PurchaseHistory/{Buyer_id}")]
        public IActionResult PurchaseHistory(string Buyer_id)
        {
            try
            {
                return Ok(_repo.PurchaseHistory(Buyer_id));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("SearchItemByName/{item_name}")]
        public IActionResult SearchItemByName(string item_name)
        {
            try
            {
                return Ok(_repo.SearchItemByName(item_name));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetAllItems")]
        public IActionResult get()
        {
            try
            {
                return Ok(_repo.GetAllItems());
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetCategories")]
        public IActionResult getcategory( )
        {
            try
            {
                return Ok(_repo.GetCategories());
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("SearchItemByCategory/{category_id}")]
        public IActionResult SearchItemByCategory(string category_id)
        {
            try
            {
                return Ok(_repo.SearchItemByCategory(category_id));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("SearchItemBySubCategory/{subcategory_id}")]
        public IActionResult SearchItemBySubCategory(string subcategory_id)
        {
            try
            {
                return Ok(_repo.SearchItemBySubCategory(subcategory_id));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }

}
