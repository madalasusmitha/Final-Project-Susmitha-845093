using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AccountService.Repository
{
    public class Token
    {
        public string sellerid { get; set; }
        public string buyerid { get; set; }
        public string token { get; set; }
        public string message { get; set; }
    }
}
