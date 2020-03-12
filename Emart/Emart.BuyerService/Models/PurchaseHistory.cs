using System;
using System.Collections.Generic;

namespace Emart.BuyerService.Models
{
    public partial class PurchaseHistory
    {
        public string Id { get; set; }
        public string Buyerid { get; set; }
        public string Sellerid { get; set; }
        public string TransactionId { get; set; }
        public string TranscationType { get; set; }
        public string Itemid { get; set; }
        public int? NumberOfItems { get; set; }
        public DateTime? DateTime { get; set; }
        public string Remarks { get; set; }

        public virtual Buyer Buyer { get; set; }
        public virtual Items Item { get; set; }
    }
}
