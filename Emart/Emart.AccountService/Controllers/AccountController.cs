using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.AccountService.Models;
using Emart.AccountService.Repository;

namespace Emart.AccountService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountRepository _repo;
        public AccountController(IAccountRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("AddBuyer")]
        public IActionResult POST(Buyer item)
        {
            try
            {
                _repo.RegisterBuyer(item);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPost]
        [Route("AddSeller")]
        public IActionResult POST(Seller item)
        {
            try
            {
                _repo.RegisterSeller(item);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("loginBuyer/{username}/{password}")]
        public IActionResult LoginBuyer(string username,string password)
        {
            try
            {
                return Ok(_repo.BuyerLogin(username, password));
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("loginseller/{username}/{password}")]
        public IActionResult Loginseller(string username, string password)
        {
            try
            {
                return Ok(_repo.sellerLogin(username, password));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        
    }
}
