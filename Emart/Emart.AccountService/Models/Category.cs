using System;
using System.Collections.Generic;

namespace Emart.AccountService.Models
{
    public partial class Category
    {
        public Category()
        {
            Cart = new HashSet<Cart>();
        }

        public string CategoryId { get; set; }
        public string CategoryName { get; set; }
        public string BriefDetails { get; set; }

        public virtual ICollection<Cart> Cart { get; set; }
    }
}
