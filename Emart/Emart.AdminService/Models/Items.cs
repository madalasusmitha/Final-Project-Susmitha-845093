using System;
using System.Collections.Generic;

namespace Emart.AdminService.Models
{
    public partial class Items
    {
        public Items()
        {
            Cart = new HashSet<Cart>();
            Discounts = new HashSet<Discounts>();
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public string Id { get; set; }
        public string CategoryId { get; set; }
        public string SubcategoryId { get; set; }
        public decimal Price { get; set; }
        public string ItemName { get; set; }
        public string Description { get; set; }
        public decimal StockNumber { get; set; }
        public string Remarks { get; set; }
        public string Sid { get; set; }
        public string Image { get; set; }

        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<Discounts> Discounts { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
