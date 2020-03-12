using System;
using System.Collections.Generic;

namespace Emart.AdminService.Models
{
    public partial class SubCategory
    {
        public SubCategory()
        {
            Cart = new HashSet<Cart>();
        }

        public string SubcategoryId { get; set; }
        public string SubcategoryName { get; set; }
        public string CategoryId { get; set; }
        public string BriefDetails { get; set; }
        public int Gst { get; set; }

        public virtual ICollection<Cart> Cart { get; set; }
    }
}
