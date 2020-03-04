using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.AccountService.Models;
using Emart.AccountService.Repository;
using Microsoft.Extensions.Configuration;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace Emart.AccountService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IConfiguration configuration;
        private readonly IAccountRepository _repo;
        public AccountController(IAccountRepository repo, IConfiguration configuration)
        {
            this.configuration = configuration;
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
            Token token = null;
            try
            {
                Buyer buyer = _repo.BuyerLogin(username, password);
                if (buyer != null)
                {
                    token = new Token() { buyerid = buyer.Id, token = GenerateJwtToken(username), message = "success" };

                }
                else
                {
                    token = new Token() { token = null, message = "unsuccess" };
                }
                return Ok(token);
            }
            catch (Exception e)
            {
                return Ok(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("loginseller/{username}/{password}")]
        public IActionResult Loginseller(string username, string password)
        {
            Token token = null;
            try
            {
                Seller seller = _repo.sellerLogin(username, password);
                if (seller != null)
                {
                    token = new Token() { sellerid = seller.Id, token = GenerateJwtToken(username), message = "success" };

                }
                else
                {
                    token = new Token() { token = null, message = "unsuccess" };
                }
                return Ok(token);
            }
            catch (Exception e)
            {
                return Ok(e.InnerException.Message);
            }
        }

        private string GenerateJwtToken(string uname)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, uname),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, uname),
                new Claim(ClaimTypes.Role,uname)
            };
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JwtKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            // recommended is 5 min
            var expires = DateTime.Now.AddDays(Convert.ToDouble(configuration["JwtExpireDays"]));
            var token = new JwtSecurityToken(
                configuration["JwtIssuer"],
                configuration["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: credentials
            );


            return new JwtSecurityTokenHandler().WriteToken(token);


          }
    }
        
}
