using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.SellerService.Repository;
using Emart.SellerService.Models;

namespace Emart.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly IItemRepository _repo;
        public ItemController(IItemRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("Additem")]
        public IActionResult Additem(Items obj)
        {
            try
            {
                _repo.Additem(obj);
                return Ok("item added");
            }
            catch (Exception e)
            {
                return Ok(e.InnerException.Message);
            }
        }
        
        [HttpGet]
        [Route("ViewItems")]
        public IActionResult viewitems()
        {
            try
            {
                return Ok(_repo.viewitems());
            }
            catch (Exception e)
            {
                return Ok(e.InnerException.Message);
            }
        }
        [HttpDelete]
        [Route("Deleteitem/{id}")]
        public void Deleteitem(string id)
        {
            try
            {
                _repo.Deleteitem(id);
                Console.WriteLine("item deleted");
            }
            catch (Exception e)
            {
                Console.WriteLine(e.InnerException.Message);
            }
        }
        [HttpPut]
        [Route("updateitem")]
        public void updateitem(Items obj)
        {
            _repo.Updateitem(obj);

        }
        [HttpGet]
        [Route("getitem/{id}")]
        public IActionResult getitem(string id)
        {
            try
            {
                return Ok(_repo.Getitem(id));
            }
            catch (Exception e)
            {
                return Ok(e.InnerException.Message);
            }
        }
    }
}


    
