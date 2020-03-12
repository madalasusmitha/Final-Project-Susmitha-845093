﻿using System;
using System.Collections.Generic;

namespace Emart.BuyerService.Models
{
    public partial class Seller
    {
        public Seller()
        {
            Cart = new HashSet<Cart>();
        }

        public string Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Companyname { get; set; }
        public string Gstin { get; set; }
        public string Briefaboutcompany { get; set; }
        public string PostalAddress { get; set; }
        public string Website { get; set; }
        public string Emailid { get; set; }
        public string Contactnumber { get; set; }

        public virtual ICollection<Cart> Cart { get; set; }
    }
}
