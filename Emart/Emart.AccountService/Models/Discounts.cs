using System;
using System.Collections.Generic;

namespace Emart.AccountService.Models
{
    public partial class Discounts
    {
        public int Id { get; set; }
        public string Itemid { get; set; }
        public string DiscountCode { get; set; }
        public decimal? Percentage { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Description { get; set; }

        public virtual Items Item { get; set; }
    }
}
